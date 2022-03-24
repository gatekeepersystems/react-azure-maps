import { IAzureCustomControls, IAzureMapControls, MapType } from '../../types';
import atlas from 'azure-maps-control';
export declare const createMapControls: (mapRef: MapType, controls: IAzureMapControls[]) => void;
export declare const createControl: (type: string, options?: atlas.ControlOptions | undefined) => any | undefined;
export declare const createMapCustomControls: (mapRef: MapType, customControls: IAzureCustomControls[]) => void;
