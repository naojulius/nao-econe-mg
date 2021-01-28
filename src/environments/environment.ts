// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_host: "https://localhost:44387", 
  //api_host: "http://www.econe-mg.somee.com",
  //app===>https://web-kreativity-econe-mg.herokuapp.com/
  // intern routes
  achat_vente: "/achat-vente",
  emploie: "/pages/emploie",
  rencontre: "pages/rencontre",
  petite_annonce: "/petite-annonce",
  home: "/pages/home",
  petite_annonce_detail: "pages/petite-annonce-detail",
  achat_vente_detail: "pages/achat-vente-detail",
  job_detail: "pages/details/emploie-details",
  vente_detail: "pages/details/vente-details",
  rencontre_detail: "pages/rencontre-detail",

  registration: "/auth/registration",
  login: "/auth/login",
  acceuil: "Acceuil",
  profile: "pages/user/profile",
  dashboard: "pages/dashboard/home",
  createAnnonce: "pages/annonce-form", 
  createVente: "pages/vente-form",
  createFlashAnnonce: "pages/flash-annonce-form",


  doLogin: "/api/authentication/login",
  doRegistration: "/api/authentication/registration",
  get_pickList: "/api/pickList/getByGroup?pickListGroup=",
  api_new_vente: "/api/vente/add",
  api_get_unauthentified_vente: '/api/vente/getUnauthentified',
  api_new_flash_annonce: "/api/flashannonce/add",
  api_get_flash_annonce_by_state : '/api/flashannonce/getByStatus?isActivated=',
  api_get_flash_annonce_by_user: '/api/flashannonce/getByUser?user=',
  api_get_all_flash_annonce: '/api/flashannonce/all',
  api_get_flash_annonce_by_id: '/api/flashannonce/getById?id=',
  api_get_random_flash_annonce: '/api/flashannonce/getRandomFlashAnnonce',
  api_new_annonce: '/api/annonce/add',
  api_get_unauthentified_annonce: '/api/annonce/getUnauthentified',
  api_all_annonce: "/api/annonce/all",
  api_filter_annonce: "/api/annonce/filter",
  api_all_vente: "/api/vente/all",

  api_get_unauthentified_job: "/api/job/getUnauthentified",
  api_all_job: "/api/job/all",
  api_file_image: '/api/files/image?'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
