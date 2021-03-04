const envType = process.env.REACT_APP_ENV || "development";

const types = {
  development: {
    BASE_URL:
      "https://9b390ddee43f258b0503e063002b7f79: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@chf-avraham.myshopify.com/",
    APP_DOMAIN: "http://localhost:3001"
  }
};

export const config = types[envType];
