import atlas from 'azure-maps-control';
export declare const generateLinesFromArrayOfPosition: (coordinates: atlas.data.Position[]) => atlas.data.LineString;
export declare const generatePixelHeading: (origin: atlas.Pixel, destination: atlas.Pixel) => number;
