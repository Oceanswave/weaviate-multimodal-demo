import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AggregateMultiModal = {
  __typename?: "AggregateMultiModal";
  /** Aggregate this property"filename" */
  filename?: Maybe<AggregateMultiModalfilenameObj>;
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateMultiModalGroupedByObj>;
  /** Aggregate this property"image" */
  image?: Maybe<AggregateMultiModalimageObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateMultiModalMetaObject>;
};

/** An object containing the path and value of the grouped property */
export type AggregateMultiModalGroupedByObj = {
  __typename?: "AggregateMultiModalGroupedByObj";
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars["String"]>;
};

export type AggregateMultiModalMetaObject = {
  __typename?: "AggregateMultiModalMetaObject";
  count?: Maybe<Scalars["Int"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateMultiModalfilenameObj = {
  __typename?: "AggregateMultiModalfilenameObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateMultiModalfilenameTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateMultiModalfilenameObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateMultiModalfilenameTopOccurrencesObj = {
  __typename?: "AggregateMultiModalfilenameTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateMultiModalimageObj = {
  __typename?: "AggregateMultiModalimageObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateMultiModalimageTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateMultiModalimageObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateMultiModalimageTopOccurrencesObj = {
  __typename?: "AggregateMultiModalimageTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** Hybrid search */
export type AggregateObjectsMultiModalHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars["Float"]>;
  /** Query string */
  query?: InputMaybe<Scalars["String"]>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type AggregateObjectsMultiModalNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars["String"]>;
};

export type AggregateObjectsMultiModalNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars["Float"]>>;
};

export type AggregateObjectsMultiModalWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars["Float"];
};

export type AggregateObjectsMultiModalWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars["Float"];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars["Float"];
};

export type AggregateObjectsMultiModalWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsMultiModalWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsMultiModalWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsMultiModalWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsMultiModalWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsMultiModalWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsMultiModalWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars["Int"]>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars["Float"]>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars["String"]>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars["String"]>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type AggregateObjectsMultiModalWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsMultiModalWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsMultiModalWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsMultiModalWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars["Int"]>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars["Float"]>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars["String"]>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars["String"]>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum AggregateObjectsMultiModalWhereOperatorEnum {
  And = "And",
  Equal = "Equal",
  GreaterThan = "GreaterThan",
  GreaterThanEqual = "GreaterThanEqual",
  IsNull = "IsNull",
  LessThan = "LessThan",
  LessThanEqual = "LessThanEqual",
  Like = "Like",
  Not = "Not",
  NotEqual = "NotEqual",
  Or = "Or",
  WithinGeoRange = "WithinGeoRange",
}

/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObj = {
  __typename?: "AggregateObjectsObj";
  MultiModal?: Maybe<Array<Maybe<AggregateMultiModal>>>;
};

/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjMultiModalArgs = {
  ask?: InputMaybe<QnATransformersAggregateMultiModalAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  hybrid?: InputMaybe<AggregateObjectsMultiModalHybridInpObj>;
  limit?: InputMaybe<Scalars["Int"]>;
  nearImage?: InputMaybe<Img2VecImageAggregateMultiModalNearImageInpObj>;
  nearObject?: InputMaybe<AggregateObjectsMultiModalNearObjectInpObj>;
  nearText?: InputMaybe<Txt2VecC11yAggregateMultiModalNearTextInpObj>;
  nearVector?: InputMaybe<AggregateObjectsMultiModalNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AggregateObjectsMultiModalWhereInpObj>;
};

export type ExploreNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars["String"]>;
};

export type ExploreNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  vector: Array<InputMaybe<Scalars["Float"]>>;
};

/** Explore Concepts on a local weaviate with vector-aided search */
export type ExploreObj = {
  __typename?: "ExploreObj";
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: Maybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: Maybe<Scalars["Float"]>;
  /** Name of the Class */
  className?: Maybe<Scalars["String"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: Maybe<Scalars["Float"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsMultiModalGroupInpObj = {
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  type?: InputMaybe<GetObjectsMultiModalGroupInpObjTypeEnum>;
};

export enum GetObjectsMultiModalGroupInpObjTypeEnum {
  Closest = "closest",
  Merge = "merge",
}

export type GetObjectsMultiModalHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars["String"]>;
};

/** Hybrid search */
export type GetObjectsMultiModalHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars["Float"]>;
  /** Query string */
  query?: InputMaybe<Scalars["String"]>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type GetObjectsMultiModalNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars["String"]>;
};

export type GetObjectsMultiModalNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars["Float"]>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsMultiModalSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsMultiModalSortInpObjTypeEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Get', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export enum GetObjectsMultiModalSortInpObjTypeEnum {
  Asc = "asc",
  Desc = "desc",
}

export type GetObjectsMultiModalWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars["Float"];
};

export type GetObjectsMultiModalWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars["Float"];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars["Float"];
};

export type GetObjectsMultiModalWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsMultiModalWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsMultiModalWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsMultiModalWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsMultiModalWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsMultiModalWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsMultiModalWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars["Int"]>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars["Float"]>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars["String"]>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars["String"]>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type GetObjectsMultiModalWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsMultiModalWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsMultiModalWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsMultiModalWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars["Int"]>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars["Float"]>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars["String"]>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars["String"]>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export enum GetObjectsMultiModalWhereOperatorEnum {
  And = "And",
  Equal = "Equal",
  GreaterThan = "GreaterThan",
  GreaterThanEqual = "GreaterThanEqual",
  IsNull = "IsNull",
  LessThan = "LessThan",
  LessThanEqual = "LessThanEqual",
  Like = "Like",
  Not = "Not",
  NotEqual = "NotEqual",
  Or = "Or",
  WithinGeoRange = "WithinGeoRange",
}

/** An object used to get %ss on a local Weaviate */
export type GetObjectsObj = {
  __typename?: "GetObjectsObj";
  MultiModal?: Maybe<Array<Maybe<MultiModal>>>;
};

/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjMultiModalArgs = {
  after?: InputMaybe<Scalars["String"]>;
  ask?: InputMaybe<QnATransformersGetObjectsMultiModalAskInpObj>;
  bm25?: InputMaybe<GetObjectsMultiModalHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsMultiModalGroupInpObj>;
  hybrid?: InputMaybe<GetObjectsMultiModalHybridInpObj>;
  limit?: InputMaybe<Scalars["Int"]>;
  nearImage?: InputMaybe<Img2VecImageGetObjectsMultiModalNearImageInpObj>;
  nearObject?: InputMaybe<GetObjectsMultiModalNearObjectInpObj>;
  nearText?: InputMaybe<Txt2VecC11yGetObjectsMultiModalNearTextInpObj>;
  nearVector?: InputMaybe<GetObjectsMultiModalNearVectorInpObj>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsMultiModalSortInpObj>>>;
  where?: InputMaybe<GetObjectsMultiModalWhereInpObj>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Img2VecImageAggregateMultiModalNearImageInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Base64 encoded image */
  image: Scalars["String"];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Img2VecImageExploreNearImageInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Base64 encoded image */
  image: Scalars["String"];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Img2VecImageGetObjectsMultiModalNearImageInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Base64 encoded image */
  image: Scalars["String"];
};

export type MultiModal = {
  __typename?: "MultiModal";
  _additional?: Maybe<MultiModalAdditional>;
  filename?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
};

export type MultiModalAdditional = {
  __typename?: "MultiModalAdditional";
  answer?: Maybe<MultiModalAdditionalAnswer>;
  certainty?: Maybe<Scalars["Float"]>;
  classification?: Maybe<MultiModalAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Float"]>;
  explainScore?: Maybe<Scalars["String"]>;
  generate?: Maybe<MultiModalAdditionalGenerate>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars["String"]>;
  lastUpdateTimeUnix?: Maybe<Scalars["String"]>;
  score?: Maybe<Scalars["String"]>;
  spellCheck?: Maybe<Array<Maybe<MultiModalAdditionalSpellCheck>>>;
  summary?: Maybe<Array<Maybe<MultiModalAdditionalSummary>>>;
  tokens?: Maybe<Array<Maybe<MultiModalAdditionalTokens>>>;
  vector?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type MultiModalAdditionalGenerateArgs = {
  groupedResult?: InputMaybe<MultiModalAllResultsArg>;
  singleResult?: InputMaybe<MultiModalIndividualResultsArg>;
};

export type MultiModalAdditionalSummaryArgs = {
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MultiModalAdditionalTokensArgs = {
  certainty?: InputMaybe<Scalars["Float"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MultiModalAdditionalAnswer = {
  __typename?: "MultiModalAdditionalAnswer";
  certainty?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
  endPosition?: Maybe<Scalars["Int"]>;
  hasAnswer?: Maybe<Scalars["Boolean"]>;
  property?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
  startPosition?: Maybe<Scalars["Int"]>;
};

export type MultiModalAdditionalClassification = {
  __typename?: "MultiModalAdditionalClassification";
  basedOn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  completed?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  scope?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type MultiModalAdditionalGenerate = {
  __typename?: "MultiModalAdditionalGenerate";
  error?: Maybe<Scalars["String"]>;
  groupedResult?: Maybe<Scalars["String"]>;
  singleResult?: Maybe<Scalars["String"]>;
};

export type MultiModalAdditionalSpellCheck = {
  __typename?: "MultiModalAdditionalSpellCheck";
  changes?: Maybe<Array<Maybe<MultiModalAdditionalSpellCheckChanges>>>;
  didYouMean?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  numberOfCorrections?: Maybe<Scalars["Int"]>;
  originalText?: Maybe<Scalars["String"]>;
};

export type MultiModalAdditionalSpellCheckChanges = {
  __typename?: "MultiModalAdditionalSpellCheckChanges";
  corrected?: Maybe<Scalars["String"]>;
  original?: Maybe<Scalars["String"]>;
};

export type MultiModalAdditionalSummary = {
  __typename?: "MultiModalAdditionalSummary";
  property?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
};

export type MultiModalAdditionalTokens = {
  __typename?: "MultiModalAdditionalTokens";
  certainty?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
  endPosition?: Maybe<Scalars["Int"]>;
  entity?: Maybe<Scalars["String"]>;
  property?: Maybe<Scalars["String"]>;
  startPosition?: Maybe<Scalars["Int"]>;
  word?: Maybe<Scalars["String"]>;
};

export type MultiModalAllResultsArg = {
  /** Properties used for the generation */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** task */
  task?: InputMaybe<Scalars["String"]>;
};

export type MultiModalIndividualResultsArg = {
  /** prompt */
  prompt?: InputMaybe<Scalars["String"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateMultiModalAskInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Question to be answered */
  question: Scalars["String"];
  /** Arranges the results by certainty */
  rerank?: InputMaybe<Scalars["Boolean"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersExploreAskInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Question to be answered */
  question: Scalars["String"];
  /** Arranges the results by certainty */
  rerank?: InputMaybe<Scalars["Boolean"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsMultiModalAskInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Question to be answered */
  question: Scalars["String"];
  /** Arranges the results by certainty */
  rerank?: InputMaybe<Scalars["Boolean"]>;
};

export type Txt2VecC11yAggregateMultiModalMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecC11yAggregateMultiModalMoveAwayFromMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecC11yAggregateMultiModalMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** id of an object */
  id?: InputMaybe<Scalars["String"]>;
};

export type Txt2VecC11yAggregateMultiModalMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<InputMaybe<Txt2VecC11yAggregateMultiModalMoveToMovementObjectsInpObj>>
  >;
};

/** Movement Object */
export type Txt2VecC11yAggregateMultiModalMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** id of an object */
  id?: InputMaybe<Scalars["String"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Txt2VecC11yAggregateMultiModalNearTextInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  concepts: Array<InputMaybe<Scalars["String"]>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<Txt2VecC11yAggregateMultiModalMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<Txt2VecC11yAggregateMultiModalMoveTo>;
};

export type Txt2VecC11yExploreMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<InputMaybe<Txt2VecC11yExploreMoveAwayFromMovementObjectsInpObj>>
  >;
};

/** Movement Object */
export type Txt2VecC11yExploreMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** id of an object */
  id?: InputMaybe<Scalars["String"]>;
};

export type Txt2VecC11yExploreMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<InputMaybe<Txt2VecC11yExploreMoveToMovementObjectsInpObj>>
  >;
};

/** Movement Object */
export type Txt2VecC11yExploreMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** id of an object */
  id?: InputMaybe<Scalars["String"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Txt2VecC11yExploreNearTextInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  concepts: Array<InputMaybe<Scalars["String"]>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<Txt2VecC11yExploreMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<Txt2VecC11yExploreMoveTo>;
};

export type Txt2VecC11yGetObjectsMultiModalMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecC11yGetObjectsMultiModalMoveAwayFromMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecC11yGetObjectsMultiModalMoveAwayFromMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** id of an object */
  id?: InputMaybe<Scalars["String"]>;
};

export type Txt2VecC11yGetObjectsMultiModalMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecC11yGetObjectsMultiModalMoveToMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecC11yGetObjectsMultiModalMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** id of an object */
  id?: InputMaybe<Scalars["String"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Txt2VecC11yGetObjectsMultiModalNearTextInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  concepts: Array<InputMaybe<Scalars["String"]>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<Txt2VecC11yGetObjectsMultiModalMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<Txt2VecC11yGetObjectsMultiModalMoveTo>;
};

/** Location of the root query */
export type WeaviateObj = {
  __typename?: "WeaviateObj";
  /** Filter options for a local Aggregate query, used to convert the result to the specified filters */
  Aggregate?: Maybe<AggregateObjectsObj>;
  /** Explore Concepts on a local weaviate with vector-aided search */
  Explore?: Maybe<Array<Maybe<ExploreObj>>>;
  /** Get Objects on a local Weaviate */
  Get?: Maybe<GetObjectsObj>;
};

/** Location of the root query */
export type WeaviateObjExploreArgs = {
  ask?: InputMaybe<QnATransformersExploreAskInpObj>;
  limit?: InputMaybe<Scalars["Int"]>;
  nearImage?: InputMaybe<Img2VecImageExploreNearImageInpObj>;
  nearObject?: InputMaybe<ExploreNearObjectInpObj>;
  nearText?: InputMaybe<Txt2VecC11yExploreNearTextInpObj>;
  nearVector?: InputMaybe<ExploreNearVectorInpObj>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type GetMultiModalImageQueryVariables = Exact<{
  image: Scalars["String"];
}>;

export type GetMultiModalImageQuery = {
  __typename?: "WeaviateObj";
  Get?: {
    __typename?: "GetObjectsObj";
    MultiModal?: Array<{
      __typename?: "MultiModal";
      filename?: string | null;
      image?: string | null;
      _additional?: {
        __typename?: "MultiModalAdditional";
        id?: string | null;
        certainty?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetMultiModalTextQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars["String"]>;
}>;

export type GetMultiModalTextQuery = {
  __typename?: "WeaviateObj";
  Get?: {
    __typename?: "GetObjectsObj";
    MultiModal?: Array<{
      __typename?: "MultiModal";
      filename?: string | null;
      image?: string | null;
      _additional?: {
        __typename?: "MultiModalAdditional";
        id?: string | null;
        certainty?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export const GetMultiModalImageDocument = `
    query getMultiModalImage($image: String!) {
  Get {
    MultiModal(nearImage: {image: $image}) {
      filename
      image
      _additional {
        id
        certainty
      }
    }
  }
}
    `;
export const useGetMultiModalImageQuery = <
  TData = GetMultiModalImageQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: GetMultiModalImageQueryVariables,
  options?: UseQueryOptions<GetMultiModalImageQuery, TError, TData>
) =>
  useQuery<GetMultiModalImageQuery, TError, TData>(
    ["getMultiModalImage", variables],
    fetcher<GetMultiModalImageQuery, GetMultiModalImageQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetMultiModalImageDocument,
      variables
    ),
    options
  );
export const GetMultiModalTextDocument = `
    query getMultiModalText($searchTerm: String) {
  Get {
    MultiModal(nearText: {concepts: [$searchTerm]}) {
      filename
      image
      _additional {
        id
        certainty
      }
    }
  }
}
    `;
export const useGetMultiModalTextQuery = <
  TData = GetMultiModalTextQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetMultiModalTextQueryVariables,
  options?: UseQueryOptions<GetMultiModalTextQuery, TError, TData>
) =>
  useQuery<GetMultiModalTextQuery, TError, TData>(
    variables === undefined
      ? ["getMultiModalText"]
      : ["getMultiModalText", variables],
    fetcher<GetMultiModalTextQuery, GetMultiModalTextQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetMultiModalTextDocument,
      variables
    ),
    options
  );

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
