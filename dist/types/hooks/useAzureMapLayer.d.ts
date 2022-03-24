import { IAzureLayerStatefulProviderProps, LayerType, DataSourceType } from '../types';
import atlas from 'azure-maps-control';
export declare const constructLayer: ({ id, options, type }: Omit<IAzureLayerStatefulProviderProps, 'onCreateCustomLayer'>, dataSourceRef: DataSourceType) => atlas.layer.SymbolLayer | atlas.layer.ImageLayer | atlas.layer.TileLayer | atlas.layer.HeatMapLayer | atlas.layer.LineLayer | atlas.layer.PolygonExtrusionLayer | atlas.layer.PolygonLayer | atlas.layer.BubbleLayer | null;
export declare const useAzureMapLayer: ({ id, options, type, events, lifecycleEvents, onCreateCustomLayer }: IAzureLayerStatefulProviderProps) => {
    layerRef: LayerType | null;
};
