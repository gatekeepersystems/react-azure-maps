import { IAzureVectorTileSourceStatefulProviderProps } from '../types';
/**
 * @param id datasource identifier
 * @param children layer providers representing datasource layers
 * @param options vector tile datasource options: see atlas.VectorTileSourceOptions
 * @param events a object containing sourceadded, sourceremoved event handlers
 */
declare const AzureMapVectorTileSourceStatefulProvider: ({ id, children, options, events, }: IAzureVectorTileSourceStatefulProviderProps) => JSX.Element;
export { AzureMapVectorTileSourceStatefulProvider as AzureMapVectorTileSourceProvider };
