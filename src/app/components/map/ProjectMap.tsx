"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useProjectStore } from "@/app/store/useProjectStore";
import { allProjects } from "@/app/store/selectors/projectSelectors";
import styles from "@/app/styles/map.module.css";
import type { Project } from "@/app/types/project";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";
const DEFAULT_CENTER: [number, number] = [-74.0721, 4.7109];
const DEFAULT_ZOOM = 2;
const SELECTED_ZOOM = 14;
const FLY_DURATION = 1500;

function createMarkerElement(project: Project, onClick: () => void) {
  const el = document.createElement("div");
  el.className = styles.marker;
  el.title = project.title;
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    onClick();
  });
  return el;
}

function createPopupContent(project: Project) {
  return `<strong>${project.title}</strong><p>${project.city || project.address}</p>`;
}

export function ProjectMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  const selectedProjectId = useProjectStore((s) => s.selectedProjectId);
  const selectProject = useProjectStore((s) => s.selectProject);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      pitch: 0,
      bearing: 0,
      maxPitch: 0,
      projection: "mercator",
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    allProjects.forEach((project) => {
      if (!map.current) return;

      const el = createMarkerElement(project, () => selectProject(project._id));

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([project.position.lng, project.position.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25, closeButton: false }).setHTML(
            createPopupContent(project),
          ),
        )
        .addTo(map.current);

      markersRef.current.push(marker);
    });

    return () => {
      map.current?.remove();
      map.current = null;
      markersRef.current = [];
    };
  }, [selectProject]);

  useEffect(() => {
    if (!map.current || !selectedProjectId) return;

    const projectIndex = allProjects.findIndex(
      (p) => p._id === selectedProjectId,
    );
    if (projectIndex === -1) return;

    const project = allProjects[projectIndex];

    map.current.flyTo({
      center: [project.position.lng, project.position.lat],
      zoom: SELECTED_ZOOM,
      duration: FLY_DURATION,
    });

    markersRef.current.forEach((m) => m.getPopup()?.remove());
    markersRef.current[projectIndex]?.togglePopup();
  }, [selectedProjectId]);

  return <div ref={mapContainer} className={styles.container} />;
}
