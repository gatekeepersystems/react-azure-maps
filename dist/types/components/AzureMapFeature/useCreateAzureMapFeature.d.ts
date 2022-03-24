import { IAzureMapFeature } from '../../types';
import atlas from 'azure-maps-control';
export declare const createAzureMapFeature: ({ type, coordinate, coordinates, multipleCoordinates, multipleDimensionCoordinates, bbox }: IAzureMapFeature) => atlas.data.Geometry | undefined;
