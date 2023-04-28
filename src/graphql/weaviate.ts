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

export type AggregateJeopardyQuestion = {
  __typename?: "AggregateJeopardyQuestion";
  /** Aggregate this property"air_date" */
  air_date?: Maybe<AggregateJeopardyQuestionair_DateObj>;
  /** Aggregate this property"answer" */
  answer?: Maybe<AggregateJeopardyQuestionanswerObj>;
  /** Aggregate this property"category" */
  category?: Maybe<AggregateJeopardyQuestioncategoryObj>;
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateJeopardyQuestionGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateJeopardyQuestionMetaObject>;
  /** Aggregate this property"question" */
  question?: Maybe<AggregateJeopardyQuestionquestionObj>;
  /** Aggregate this property"round" */
  round?: Maybe<AggregateJeopardyQuestionroundObj>;
  /** Aggregate this property"show_number" */
  show_number?: Maybe<AggregateJeopardyQuestionshow_NumberObj>;
  /** Aggregate this property"value" */
  value?: Maybe<AggregateJeopardyQuestionvalueObj>;
};

/** An object containing the path and value of the grouped property */
export type AggregateJeopardyQuestionGroupedByObj = {
  __typename?: "AggregateJeopardyQuestionGroupedByObj";
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars["String"]>;
};

export type AggregateJeopardyQuestionMetaObject = {
  __typename?: "AggregateJeopardyQuestionMetaObject";
  count?: Maybe<Scalars["Int"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionair_DateObj = {
  __typename?: "AggregateJeopardyQuestionair_dateObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateJeopardyQuestionair_DateTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionair_DateObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateJeopardyQuestionair_DateTopOccurrencesObj = {
  __typename?: "AggregateJeopardyQuestionair_dateTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionanswerObj = {
  __typename?: "AggregateJeopardyQuestionanswerObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateJeopardyQuestionanswerTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionanswerObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateJeopardyQuestionanswerTopOccurrencesObj = {
  __typename?: "AggregateJeopardyQuestionanswerTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestioncategoryObj = {
  __typename?: "AggregateJeopardyQuestioncategoryObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateJeopardyQuestioncategoryTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestioncategoryObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateJeopardyQuestioncategoryTopOccurrencesObj = {
  __typename?: "AggregateJeopardyQuestioncategoryTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionquestionObj = {
  __typename?: "AggregateJeopardyQuestionquestionObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateJeopardyQuestionquestionTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionquestionObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateJeopardyQuestionquestionTopOccurrencesObj = {
  __typename?: "AggregateJeopardyQuestionquestionTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionroundObj = {
  __typename?: "AggregateJeopardyQuestionroundObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateJeopardyQuestionroundTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionroundObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateJeopardyQuestionroundTopOccurrencesObj = {
  __typename?: "AggregateJeopardyQuestionroundTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionshow_NumberObj = {
  __typename?: "AggregateJeopardyQuestionshow_numberObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateJeopardyQuestionshow_NumberTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionshow_NumberObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateJeopardyQuestionshow_NumberTopOccurrencesObj = {
  __typename?: "AggregateJeopardyQuestionshow_numberTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionvalueObj = {
  __typename?: "AggregateJeopardyQuestionvalueObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateJeopardyQuestionvalueTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateJeopardyQuestionvalueObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateJeopardyQuestionvalueTopOccurrencesObj = {
  __typename?: "AggregateJeopardyQuestionvalueTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
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
export type AggregateObjectsJeopardyQuestionHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars["Float"]>;
  /** Query string */
  query?: InputMaybe<Scalars["String"]>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type AggregateObjectsJeopardyQuestionNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars["String"]>;
};

export type AggregateObjectsJeopardyQuestionNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars["Float"]>>;
};

export type AggregateObjectsJeopardyQuestionWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars["Float"];
};

export type AggregateObjectsJeopardyQuestionWhereGeoRangeGeoCoordinatesInpObj =
  {
    /** The latitude (in decimal format) of the geoCoordinates to search around. */
    latitude: Scalars["Float"];
    /** The longitude (in decimal format) of the geoCoordinates to search around. */
    longitude: Scalars["Float"];
  };

export type AggregateObjectsJeopardyQuestionWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsJeopardyQuestionWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsJeopardyQuestionWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsJeopardyQuestionWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsJeopardyQuestionWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsJeopardyQuestionWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsJeopardyQuestionWhereGeoRangeInpObj>;
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
export type AggregateObjectsJeopardyQuestionWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsJeopardyQuestionWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsJeopardyQuestionWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsJeopardyQuestionWhereGeoRangeInpObj>;
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
export enum AggregateObjectsJeopardyQuestionWhereOperatorEnum {
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
  JeopardyQuestion?: Maybe<Array<Maybe<AggregateJeopardyQuestion>>>;
  MultiModal?: Maybe<Array<Maybe<AggregateMultiModal>>>;
  /** The main class */
  OpenAIDocument?: Maybe<Array<Maybe<AggregateOpenAiDocument>>>;
};

/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjJeopardyQuestionArgs = {
  ask?: InputMaybe<QnATransformersAggregateJeopardyQuestionAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  hybrid?: InputMaybe<AggregateObjectsJeopardyQuestionHybridInpObj>;
  limit?: InputMaybe<Scalars["Int"]>;
  nearObject?: InputMaybe<AggregateObjectsJeopardyQuestionNearObjectInpObj>;
  nearText?: InputMaybe<Txt2VecOpenAiAggregateJeopardyQuestionNearTextInpObj>;
  nearVector?: InputMaybe<AggregateObjectsJeopardyQuestionNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AggregateObjectsJeopardyQuestionWhereInpObj>;
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

/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjOpenAiDocumentArgs = {
  ask?: InputMaybe<QnATransformersAggregateOpenAiDocumentAskInpObj>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  hybrid?: InputMaybe<AggregateObjectsOpenAiDocumentHybridInpObj>;
  limit?: InputMaybe<Scalars["Int"]>;
  nearObject?: InputMaybe<AggregateObjectsOpenAiDocumentNearObjectInpObj>;
  nearVector?: InputMaybe<AggregateObjectsOpenAiDocumentNearVectorInpObj>;
  objectLimit?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AggregateObjectsOpenAiDocumentWhereInpObj>;
};

/** Hybrid search */
export type AggregateObjectsOpenAiDocumentHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars["Float"]>;
  /** Query string */
  query?: InputMaybe<Scalars["String"]>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type AggregateObjectsOpenAiDocumentNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars["String"]>;
};

export type AggregateObjectsOpenAiDocumentNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars["Float"]>>;
};

export type AggregateObjectsOpenAiDocumentWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars["Float"];
};

export type AggregateObjectsOpenAiDocumentWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars["Float"];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars["Float"];
};

export type AggregateObjectsOpenAiDocumentWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsOpenAiDocumentWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsOpenAiDocumentWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsOpenAiDocumentWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsOpenAiDocumentWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsOpenAiDocumentWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsOpenAiDocumentWhereGeoRangeInpObj>;
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
export type AggregateObjectsOpenAiDocumentWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsOpenAiDocumentWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsOpenAiDocumentWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsOpenAiDocumentWhereGeoRangeInpObj>;
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
export enum AggregateObjectsOpenAiDocumentWhereOperatorEnum {
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

/** The main class */
export type AggregateOpenAiDocument = {
  __typename?: "AggregateOpenAIDocument";
  /** Aggregate this property"author" */
  author?: Maybe<AggregateOpenAiDocumentauthorObj>;
  /** Aggregate this property"chunk_id" */
  chunk_id?: Maybe<AggregateOpenAiDocumentchunk_IdObj>;
  /** Aggregate this property"created_at" */
  created_at?: Maybe<AggregateOpenAiDocumentcreated_AtObj>;
  /** Aggregate this property"document_id" */
  document_id?: Maybe<AggregateOpenAiDocumentdocument_IdObj>;
  /** Indicates the group of returned data */
  groupedBy?: Maybe<AggregateOpenAiDocumentGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta?: Maybe<AggregateOpenAiDocumentMetaObject>;
  /** Aggregate this property"source" */
  source?: Maybe<AggregateOpenAiDocumentsourceObj>;
  /** Aggregate this property"source_id" */
  source_id?: Maybe<AggregateOpenAiDocumentsource_IdObj>;
  /** Aggregate this property"text" */
  text?: Maybe<AggregateOpenAiDocumenttextObj>;
  /** Aggregate this property"url" */
  url?: Maybe<AggregateOpenAiDocumenturlObj>;
};

/** An object containing the path and value of the grouped property */
export type AggregateOpenAiDocumentGroupedByObj = {
  __typename?: "AggregateOpenAIDocumentGroupedByObj";
  /** The path of the grouped property */
  path?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The value of the grouped property */
  value?: Maybe<Scalars["String"]>;
};

export type AggregateOpenAiDocumentMetaObject = {
  __typename?: "AggregateOpenAIDocumentMetaObject";
  count?: Maybe<Scalars["Int"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentauthorObj = {
  __typename?: "AggregateOpenAIDocumentauthorObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateOpenAiDocumentauthorTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentauthorObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateOpenAiDocumentauthorTopOccurrencesObj = {
  __typename?: "AggregateOpenAIDocumentauthorTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentchunk_IdObj = {
  __typename?: "AggregateOpenAIDocumentchunk_idObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateOpenAiDocumentchunk_IdTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentchunk_IdObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateOpenAiDocumentchunk_IdTopOccurrencesObj = {
  __typename?: "AggregateOpenAIDocumentchunk_idTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentcreated_AtObj = {
  __typename?: "AggregateOpenAIDocumentcreated_atObj";
  /** Aggregate on the total amount of found property values */
  count?: Maybe<Scalars["Int"]>;
  /** Aggregate on the maximum of numeric property values */
  maximum?: Maybe<Scalars["String"]>;
  /** Aggregate on the median of numeric property values */
  median?: Maybe<Scalars["String"]>;
  /** Aggregate on the minimum of numeric property values */
  minimum?: Maybe<Scalars["String"]>;
  /** Aggregate on the mode of numeric property values */
  mode?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentdocument_IdObj = {
  __typename?: "AggregateOpenAIDocumentdocument_idObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateOpenAiDocumentdocument_IdTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentdocument_IdObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateOpenAiDocumentdocument_IdTopOccurrencesObj = {
  __typename?: "AggregateOpenAIDocumentdocument_idTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentsourceObj = {
  __typename?: "AggregateOpenAIDocumentsourceObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateOpenAiDocumentsourceTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentsourceObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateOpenAiDocumentsourceTopOccurrencesObj = {
  __typename?: "AggregateOpenAIDocumentsourceTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentsource_IdObj = {
  __typename?: "AggregateOpenAIDocumentsource_idObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateOpenAiDocumentsource_IdTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumentsource_IdObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateOpenAiDocumentsource_IdTopOccurrencesObj = {
  __typename?: "AggregateOpenAIDocumentsource_idTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumenttextObj = {
  __typename?: "AggregateOpenAIDocumenttextObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateOpenAiDocumenttextTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumenttextObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateOpenAiDocumenttextTopOccurrencesObj = {
  __typename?: "AggregateOpenAIDocumenttextTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumenturlObj = {
  __typename?: "AggregateOpenAIDocumenturlObj";
  /** The total amount of found instances for this property */
  count?: Maybe<Scalars["Int"]>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences?: Maybe<
    Array<Maybe<AggregateOpenAiDocumenturlTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type?: Maybe<Scalars["String"]>;
};

/** An object containing Aggregation information about this property */
export type AggregateOpenAiDocumenturlObjTopOccurrencesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateOpenAiDocumenturlTopOccurrencesObj = {
  __typename?: "AggregateOpenAIDocumenturlTopOccurrencesObj";
  /** How often the most frequently occurring value for this property occurs */
  occurs?: Maybe<Scalars["Int"]>;
  /** The most frequently occurring value for this property */
  value?: Maybe<Scalars["String"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsJeopardyQuestionGroupInpObj = {
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  type?: InputMaybe<GetObjectsJeopardyQuestionGroupInpObjTypeEnum>;
};

export enum GetObjectsJeopardyQuestionGroupInpObjTypeEnum {
  Closest = "closest",
  Merge = "merge",
}

export type GetObjectsJeopardyQuestionHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars["String"]>;
};

/** Hybrid search */
export type GetObjectsJeopardyQuestionHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars["Float"]>;
  /** Query string */
  query?: InputMaybe<Scalars["String"]>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type GetObjectsJeopardyQuestionNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars["String"]>;
};

export type GetObjectsJeopardyQuestionNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars["Float"]>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsJeopardyQuestionSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsJeopardyQuestionSortInpObjTypeEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Get', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export enum GetObjectsJeopardyQuestionSortInpObjTypeEnum {
  Asc = "asc",
  Desc = "desc",
}

export type GetObjectsJeopardyQuestionWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars["Float"];
};

export type GetObjectsJeopardyQuestionWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars["Float"];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars["Float"];
};

export type GetObjectsJeopardyQuestionWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsJeopardyQuestionWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsJeopardyQuestionWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsJeopardyQuestionWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsJeopardyQuestionWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsJeopardyQuestionWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsJeopardyQuestionWhereGeoRangeInpObj>;
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
export type GetObjectsJeopardyQuestionWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsJeopardyQuestionWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsJeopardyQuestionWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsJeopardyQuestionWhereGeoRangeInpObj>;
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
export enum GetObjectsJeopardyQuestionWhereOperatorEnum {
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
  JeopardyQuestion?: Maybe<Array<Maybe<JeopardyQuestion>>>;
  MultiModal?: Maybe<Array<Maybe<MultiModal>>>;
  /** The main class */
  OpenAIDocument?: Maybe<Array<Maybe<OpenAiDocument>>>;
};

/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjJeopardyQuestionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  ask?: InputMaybe<QnATransformersGetObjectsJeopardyQuestionAskInpObj>;
  bm25?: InputMaybe<GetObjectsJeopardyQuestionHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsJeopardyQuestionGroupInpObj>;
  hybrid?: InputMaybe<GetObjectsJeopardyQuestionHybridInpObj>;
  limit?: InputMaybe<Scalars["Int"]>;
  nearObject?: InputMaybe<GetObjectsJeopardyQuestionNearObjectInpObj>;
  nearText?: InputMaybe<Txt2VecOpenAiGetObjectsJeopardyQuestionNearTextInpObj>;
  nearVector?: InputMaybe<GetObjectsJeopardyQuestionNearVectorInpObj>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsJeopardyQuestionSortInpObj>>>;
  where?: InputMaybe<GetObjectsJeopardyQuestionWhereInpObj>;
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

/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjOpenAiDocumentArgs = {
  after?: InputMaybe<Scalars["String"]>;
  ask?: InputMaybe<QnATransformersGetObjectsOpenAiDocumentAskInpObj>;
  bm25?: InputMaybe<GetObjectsOpenAiDocumentHybridGetBm25InpObj>;
  group?: InputMaybe<GetObjectsOpenAiDocumentGroupInpObj>;
  hybrid?: InputMaybe<GetObjectsOpenAiDocumentHybridInpObj>;
  limit?: InputMaybe<Scalars["Int"]>;
  nearObject?: InputMaybe<GetObjectsOpenAiDocumentNearObjectInpObj>;
  nearVector?: InputMaybe<GetObjectsOpenAiDocumentNearVectorInpObj>;
  offset?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Array<InputMaybe<GetObjectsOpenAiDocumentSortInpObj>>>;
  where?: InputMaybe<GetObjectsOpenAiDocumentWhereInpObj>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsOpenAiDocumentGroupInpObj = {
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  type?: InputMaybe<GetObjectsOpenAiDocumentGroupInpObjTypeEnum>;
};

export enum GetObjectsOpenAiDocumentGroupInpObjTypeEnum {
  Closest = "closest",
  Merge = "merge",
}

export type GetObjectsOpenAiDocumentHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars["String"]>;
};

/** Hybrid search */
export type GetObjectsOpenAiDocumentHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars["Float"]>;
  /** Query string */
  query?: InputMaybe<Scalars["String"]>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type GetObjectsOpenAiDocumentNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars["String"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars["String"]>;
};

export type GetObjectsOpenAiDocumentNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars["Float"]>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsOpenAiDocumentSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsOpenAiDocumentSortInpObjTypeEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Get', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export enum GetObjectsOpenAiDocumentSortInpObjTypeEnum {
  Asc = "asc",
  Desc = "desc",
}

export type GetObjectsOpenAiDocumentWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars["Float"];
};

export type GetObjectsOpenAiDocumentWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars["Float"];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars["Float"];
};

export type GetObjectsOpenAiDocumentWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsOpenAiDocumentWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsOpenAiDocumentWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsOpenAiDocumentWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsOpenAiDocumentWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsOpenAiDocumentWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsOpenAiDocumentWhereGeoRangeInpObj>;
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
export type GetObjectsOpenAiDocumentWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsOpenAiDocumentWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsOpenAiDocumentWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars["Boolean"]>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars["String"]>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsOpenAiDocumentWhereGeoRangeInpObj>;
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
export enum GetObjectsOpenAiDocumentWhereOperatorEnum {
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
export type Img2VecImageGetObjectsMultiModalNearImageInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Base64 encoded image */
  image: Scalars["String"];
};

export type JeopardyQuestion = {
  __typename?: "JeopardyQuestion";
  _additional?: Maybe<JeopardyQuestionAdditional>;
  /** This property was generated by Weaviate's auto-schema feature on Fri Apr 21 12:31:40 2023 */
  air_date?: Maybe<Scalars["String"]>;
  /** This property was generated by Weaviate's auto-schema feature on Fri Apr 21 12:31:40 2023 */
  answer?: Maybe<Scalars["String"]>;
  /** This property was generated by Weaviate's auto-schema feature on Fri Apr 21 12:31:40 2023 */
  category?: Maybe<Scalars["String"]>;
  /** This property was generated by Weaviate's auto-schema feature on Fri Apr 21 12:31:40 2023 */
  question?: Maybe<Scalars["String"]>;
  /** This property was generated by Weaviate's auto-schema feature on Fri Apr 21 12:31:40 2023 */
  round?: Maybe<Scalars["String"]>;
  /** This property was generated by Weaviate's auto-schema feature on Fri Apr 21 12:31:40 2023 */
  show_number?: Maybe<Scalars["String"]>;
  /** This property was generated by Weaviate's auto-schema feature on Fri Apr 21 12:31:40 2023 */
  value?: Maybe<Scalars["String"]>;
};

export type JeopardyQuestionAdditional = {
  __typename?: "JeopardyQuestionAdditional";
  answer?: Maybe<JeopardyQuestionAdditionalAnswer>;
  certainty?: Maybe<Scalars["Float"]>;
  classification?: Maybe<JeopardyQuestionAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Float"]>;
  explainScore?: Maybe<Scalars["String"]>;
  featureProjection?: Maybe<JeopardyQuestionAdditionalFeatureProjection>;
  generate?: Maybe<JeopardyQuestionAdditionalGenerate>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars["String"]>;
  lastUpdateTimeUnix?: Maybe<Scalars["String"]>;
  score?: Maybe<Scalars["String"]>;
  spellCheck?: Maybe<Array<Maybe<JeopardyQuestionAdditionalSpellCheck>>>;
  summary?: Maybe<Array<Maybe<JeopardyQuestionAdditionalSummary>>>;
  tokens?: Maybe<Array<Maybe<JeopardyQuestionAdditionalTokens>>>;
  vector?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type JeopardyQuestionAdditionalFeatureProjectionArgs = {
  algorithm?: InputMaybe<Scalars["String"]>;
  dimensions?: InputMaybe<Scalars["Int"]>;
  iterations?: InputMaybe<Scalars["Int"]>;
  learningRate?: InputMaybe<Scalars["Int"]>;
  perplexity?: InputMaybe<Scalars["Int"]>;
};

export type JeopardyQuestionAdditionalGenerateArgs = {
  groupedResult?: InputMaybe<JeopardyQuestionAllResultsArg>;
  singleResult?: InputMaybe<JeopardyQuestionIndividualResultsArg>;
};

export type JeopardyQuestionAdditionalSummaryArgs = {
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type JeopardyQuestionAdditionalTokensArgs = {
  certainty?: InputMaybe<Scalars["Float"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type JeopardyQuestionAdditionalAnswer = {
  __typename?: "JeopardyQuestionAdditionalAnswer";
  certainty?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
  endPosition?: Maybe<Scalars["Int"]>;
  hasAnswer?: Maybe<Scalars["Boolean"]>;
  property?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
  startPosition?: Maybe<Scalars["Int"]>;
};

export type JeopardyQuestionAdditionalClassification = {
  __typename?: "JeopardyQuestionAdditionalClassification";
  basedOn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  completed?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  scope?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type JeopardyQuestionAdditionalFeatureProjection = {
  __typename?: "JeopardyQuestionAdditionalFeatureProjection";
  vector?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type JeopardyQuestionAdditionalGenerate = {
  __typename?: "JeopardyQuestionAdditionalGenerate";
  error?: Maybe<Scalars["String"]>;
  groupedResult?: Maybe<Scalars["String"]>;
  singleResult?: Maybe<Scalars["String"]>;
};

export type JeopardyQuestionAdditionalSpellCheck = {
  __typename?: "JeopardyQuestionAdditionalSpellCheck";
  changes?: Maybe<Array<Maybe<JeopardyQuestionAdditionalSpellCheckChanges>>>;
  didYouMean?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  numberOfCorrections?: Maybe<Scalars["Int"]>;
  originalText?: Maybe<Scalars["String"]>;
};

export type JeopardyQuestionAdditionalSpellCheckChanges = {
  __typename?: "JeopardyQuestionAdditionalSpellCheckChanges";
  corrected?: Maybe<Scalars["String"]>;
  original?: Maybe<Scalars["String"]>;
};

export type JeopardyQuestionAdditionalSummary = {
  __typename?: "JeopardyQuestionAdditionalSummary";
  property?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
};

export type JeopardyQuestionAdditionalTokens = {
  __typename?: "JeopardyQuestionAdditionalTokens";
  certainty?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
  endPosition?: Maybe<Scalars["Int"]>;
  entity?: Maybe<Scalars["String"]>;
  property?: Maybe<Scalars["String"]>;
  startPosition?: Maybe<Scalars["Int"]>;
  word?: Maybe<Scalars["String"]>;
};

export type JeopardyQuestionAllResultsArg = {
  /** Properties used for the generation */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** task */
  task?: InputMaybe<Scalars["String"]>;
};

export type JeopardyQuestionIndividualResultsArg = {
  /** prompt */
  prompt?: InputMaybe<Scalars["String"]>;
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

/** The main class */
export type OpenAiDocument = {
  __typename?: "OpenAIDocument";
  _additional?: Maybe<OpenAiDocumentAdditional>;
  /** Document author */
  author?: Maybe<Scalars["String"]>;
  /** The chunk id */
  chunk_id?: Maybe<Scalars["String"]>;
  /** Creation date of document */
  created_at?: Maybe<Scalars["String"]>;
  /** The document id */
  document_id?: Maybe<Scalars["String"]>;
  /** The source of the data */
  source?: Maybe<Scalars["String"]>;
  /** The source id */
  source_id?: Maybe<Scalars["String"]>;
  /** The chunk's text */
  text?: Maybe<Scalars["String"]>;
  /** The source url */
  url?: Maybe<Scalars["String"]>;
};

export type OpenAiDocumentAdditional = {
  __typename?: "OpenAIDocumentAdditional";
  answer?: Maybe<OpenAiDocumentAdditionalAnswer>;
  certainty?: Maybe<Scalars["Float"]>;
  classification?: Maybe<OpenAiDocumentAdditionalClassification>;
  creationTimeUnix?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Float"]>;
  explainScore?: Maybe<Scalars["String"]>;
  generate?: Maybe<OpenAiDocumentAdditionalGenerate>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id?: Maybe<Scalars["String"]>;
  lastUpdateTimeUnix?: Maybe<Scalars["String"]>;
  score?: Maybe<Scalars["String"]>;
  spellCheck?: Maybe<Array<Maybe<OpenAiDocumentAdditionalSpellCheck>>>;
  summary?: Maybe<Array<Maybe<OpenAiDocumentAdditionalSummary>>>;
  tokens?: Maybe<Array<Maybe<OpenAiDocumentAdditionalTokens>>>;
  vector?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type OpenAiDocumentAdditionalGenerateArgs = {
  groupedResult?: InputMaybe<OpenAiDocumentAllResultsArg>;
  singleResult?: InputMaybe<OpenAiDocumentIndividualResultsArg>;
};

export type OpenAiDocumentAdditionalSummaryArgs = {
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type OpenAiDocumentAdditionalTokensArgs = {
  certainty?: InputMaybe<Scalars["Float"]>;
  distance?: InputMaybe<Scalars["Float"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type OpenAiDocumentAdditionalAnswer = {
  __typename?: "OpenAIDocumentAdditionalAnswer";
  certainty?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
  endPosition?: Maybe<Scalars["Int"]>;
  hasAnswer?: Maybe<Scalars["Boolean"]>;
  property?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
  startPosition?: Maybe<Scalars["Int"]>;
};

export type OpenAiDocumentAdditionalClassification = {
  __typename?: "OpenAIDocumentAdditionalClassification";
  basedOn?: Maybe<Array<Maybe<Scalars["String"]>>>;
  classifiedFields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  completed?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  scope?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type OpenAiDocumentAdditionalGenerate = {
  __typename?: "OpenAIDocumentAdditionalGenerate";
  error?: Maybe<Scalars["String"]>;
  groupedResult?: Maybe<Scalars["String"]>;
  singleResult?: Maybe<Scalars["String"]>;
};

export type OpenAiDocumentAdditionalSpellCheck = {
  __typename?: "OpenAIDocumentAdditionalSpellCheck";
  changes?: Maybe<Array<Maybe<OpenAiDocumentAdditionalSpellCheckChanges>>>;
  didYouMean?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  numberOfCorrections?: Maybe<Scalars["Int"]>;
  originalText?: Maybe<Scalars["String"]>;
};

export type OpenAiDocumentAdditionalSpellCheckChanges = {
  __typename?: "OpenAIDocumentAdditionalSpellCheckChanges";
  corrected?: Maybe<Scalars["String"]>;
  original?: Maybe<Scalars["String"]>;
};

export type OpenAiDocumentAdditionalSummary = {
  __typename?: "OpenAIDocumentAdditionalSummary";
  property?: Maybe<Scalars["String"]>;
  result?: Maybe<Scalars["String"]>;
};

export type OpenAiDocumentAdditionalTokens = {
  __typename?: "OpenAIDocumentAdditionalTokens";
  certainty?: Maybe<Scalars["Float"]>;
  distance?: Maybe<Scalars["Float"]>;
  endPosition?: Maybe<Scalars["Int"]>;
  entity?: Maybe<Scalars["String"]>;
  property?: Maybe<Scalars["String"]>;
  startPosition?: Maybe<Scalars["Int"]>;
  word?: Maybe<Scalars["String"]>;
};

export type OpenAiDocumentAllResultsArg = {
  /** Properties used for the generation */
  properties?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** task */
  task?: InputMaybe<Scalars["String"]>;
};

export type OpenAiDocumentIndividualResultsArg = {
  /** prompt */
  prompt?: InputMaybe<Scalars["String"]>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateJeopardyQuestionAskInpObj = {
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
export type QnATransformersAggregateOpenAiDocumentAskInpObj = {
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
export type QnATransformersGetObjectsJeopardyQuestionAskInpObj = {
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

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsOpenAiDocumentAskInpObj = {
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

export type Txt2VecOpenAiAggregateJeopardyQuestionMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecOpenAiAggregateJeopardyQuestionMoveAwayFromMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecOpenAiAggregateJeopardyQuestionMoveAwayFromMovementObjectsInpObj =
  {
    /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
    beacon?: InputMaybe<Scalars["String"]>;
    /** id of an object */
    id?: InputMaybe<Scalars["String"]>;
  };

export type Txt2VecOpenAiAggregateJeopardyQuestionMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecOpenAiAggregateJeopardyQuestionMoveToMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecOpenAiAggregateJeopardyQuestionMoveToMovementObjectsInpObj =
  {
    /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
    beacon?: InputMaybe<Scalars["String"]>;
    /** id of an object */
    id?: InputMaybe<Scalars["String"]>;
  };

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Txt2VecOpenAiAggregateJeopardyQuestionNearTextInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  concepts: Array<InputMaybe<Scalars["String"]>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<Txt2VecOpenAiAggregateJeopardyQuestionMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<Txt2VecOpenAiAggregateJeopardyQuestionMoveTo>;
};

export type Txt2VecOpenAiGetObjectsJeopardyQuestionMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecOpenAiGetObjectsJeopardyQuestionMoveAwayFromMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecOpenAiGetObjectsJeopardyQuestionMoveAwayFromMovementObjectsInpObj =
  {
    /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
    beacon?: InputMaybe<Scalars["String"]>;
    /** id of an object */
    id?: InputMaybe<Scalars["String"]>;
  };

export type Txt2VecOpenAiGetObjectsJeopardyQuestionMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars["Float"];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecOpenAiGetObjectsJeopardyQuestionMoveToMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecOpenAiGetObjectsJeopardyQuestionMoveToMovementObjectsInpObj =
  {
    /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
    beacon?: InputMaybe<Scalars["String"]>;
    /** id of an object */
    id?: InputMaybe<Scalars["String"]>;
  };

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Txt2VecOpenAiGetObjectsJeopardyQuestionNearTextInpObj = {
  /** Autocorrect input text values */
  autocorrect?: InputMaybe<Scalars["Boolean"]>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars["Float"]>;
  concepts: Array<InputMaybe<Scalars["String"]>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars["Float"]>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<Txt2VecOpenAiGetObjectsJeopardyQuestionMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<Txt2VecOpenAiGetObjectsJeopardyQuestionMoveTo>;
};

/** Location of the root query */
export type WeaviateObj = {
  __typename?: "WeaviateObj";
  /** Filter options for a local Aggregate query, used to convert the result to the specified filters */
  Aggregate?: Maybe<AggregateObjectsObj>;
  /** Get Objects on a local Weaviate */
  Get?: Maybe<GetObjectsObj>;
};

export type GetJeopardyAnswerQueryVariables = Exact<{
  question?: InputMaybe<Scalars["String"]>;
}>;

export type GetJeopardyAnswerQuery = {
  __typename?: "WeaviateObj";
  Get?: {
    __typename?: "GetObjectsObj";
    JeopardyQuestion?: Array<{
      __typename?: "JeopardyQuestion";
      category?: string | null;
      air_date?: string | null;
      question?: string | null;
      value?: string | null;
      answer?: string | null;
      round?: string | null;
      show_number?: string | null;
      _additional?: {
        __typename?: "JeopardyQuestionAdditional";
        id?: string | null;
        certainty?: number | null;
      } | null;
    } | null> | null;
  } | null;
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

export const GetJeopardyAnswerDocument = `
    query getJeopardyAnswer($question: String) {
  Get {
    JeopardyQuestion(nearText: {concepts: [$question]}, limit: 19) {
      category
      air_date
      question
      value
      answer
      round
      show_number
      _additional {
        id
        certainty
      }
    }
  }
}
    `;
export const useGetJeopardyAnswerQuery = <
  TData = GetJeopardyAnswerQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetJeopardyAnswerQueryVariables,
  options?: UseQueryOptions<GetJeopardyAnswerQuery, TError, TData>
) =>
  useQuery<GetJeopardyAnswerQuery, TError, TData>(
    variables === undefined
      ? ["getJeopardyAnswer"]
      : ["getJeopardyAnswer", variables],
    fetcher<GetJeopardyAnswerQuery, GetJeopardyAnswerQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetJeopardyAnswerDocument,
      variables
    ),
    options
  );
export const GetMultiModalImageDocument = `
    query getMultiModalImage($image: String!) {
  Get {
    MultiModal(nearImage: {image: $image}, limit: 10) {
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
    MultiModal(nearText: {concepts: [$searchTerm]}, limit: 10) {
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
