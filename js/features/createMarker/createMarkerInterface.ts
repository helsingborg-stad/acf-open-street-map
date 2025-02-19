import { LatLngObject } from "../../types";

export type TooltipOptions = {
    content: HTMLElement|string;
    closeButton?: boolean;
    maxHeight?: number;
    maxWidth?: number;
}

export type MarkerOptions = {
    position: LatLngObject;
    icon: HTMLElement|string;
    className?: string;
}

export interface CreateMarkerInterface {
    create(markerOptions: MarkerOptions, tooltipOptions: null|TooltipOptions): void; 
}