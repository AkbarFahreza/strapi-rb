module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dxcmt3zoc'),
        api_key: env('839842533324471'),
        api_secret: env('bCUd7n-fuRG_z-UeFOVQtf4osKI'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });