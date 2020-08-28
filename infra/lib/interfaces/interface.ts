import * as apigw from '@aws-cdk/aws-apigateway';

export interface ApiRequestModels {
  CreateSchemaModel: apigw.IModel;
}

export interface StatesRequestModels {
  SimsModel: apigw.IModel;
  MetadataDatasetModel: apigw.IModel;
  UserPersonalizationModel: apigw.IModel;
  InteractionsDatasetModel: apigw.IModel;
  RankingModel: apigw.IModel;
  BatchInferenceModel: apigw.IModel;
  TrainRecipeModel: apigw.IModel;
  CleanupModel: apigw.IModel;
}

export interface EventRequestModels {
  PutEventsModel: apigw.IModel;
}

export interface RequestValidators {
  parameterValidator: apigw.IRequestValidator;
  bodyValidator: apigw.IRequestValidator;
}