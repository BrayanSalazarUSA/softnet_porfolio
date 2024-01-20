/* Es el lugar donde nos conectamos al cliente de sanity  */
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '71qamy7m',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk4k0E2i69AoGGO2B2ZUI3iEJglGEzUyFEu71e5P6hsZewPBYKaPo9LO2mGuBu4fj6mI3Hi7al6POvvc5q71UCTdgkThuUmW7zYngkjWPsIgy0IKh0pg93zmxtlLBLKyRuNaPDmG54PwWcPQtcaJVIZHl8yb7SY1TdohLTcxgBdALD0mjtuT',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);