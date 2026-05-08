// Auto-import all images from project folders using webpack require.context
function importAll(r) {
  return r.keys().map(r);
}

export const newConstructionProjects = [
  {
    id: 'bowen-project',
    name: 'Bowen Project',
    description: 'A stunning custom home featuring modern architecture and premium finishes throughout.',
    images: importAll(require.context('../assets/projects/new-construction/bowen-project', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'first-one-story-oak',
    name: 'First One Story Oak Project',
    description: 'Elegant single-story craftsmanship with an open floor plan and exceptional attention to detail.',
    images: importAll(require.context('../assets/projects/new-construction/first-one-story-oak', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'jonesboro',
    name: 'Jonesboro Project',
    description: 'A beautifully designed home in Jonesboro, blending classic Southern charm with contemporary features.',
    images: importAll(require.context('../assets/projects/new-construction/jonesboro', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'meldon',
    name: 'Meldon Project',
    description: 'Professional-grade photography showcasing this custom home\'s impeccable exterior and interior finishes.',
    images: importAll(require.context('../assets/projects/new-construction/meldon', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'one-story-thayer',
    name: 'One Story Thayer Project',
    description: 'A refined single-story residence on Thayer, featuring custom millwork and designer selections.',
    images: importAll(require.context('../assets/projects/new-construction/one-story-thayer', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'second-one-story-oak',
    name: 'Second One Story Oak Project',
    description: 'A second custom home along Oak, continuing our tradition of superior craftsmanship and quality.',
    images: importAll(require.context('../assets/projects/new-construction/second-one-story-oak', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'thirkield',
    name: 'Thirkield Project',
    description: 'Meticulous construction and premium finishes define this standout residential project.',
    images: importAll(require.context('../assets/projects/new-construction/thirkield', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'two-story-brown',
    name: 'Two Story Brown Project',
    description: 'An impressive two-story home showcasing bold architectural lines and luxury appointments.',
    images: importAll(require.context('../assets/projects/new-construction/two-story-brown', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'two-story-oak',
    name: 'Two Story Oak Project',
    description: 'A grand two-story build on Oak that exemplifies our commitment to performance and precision.',
    images: importAll(require.context('../assets/projects/new-construction/two-story-oak', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'two-story-thayer',
    name: 'Two Story Thayer Project',
    description: 'An elegant two-story Thayer residence built to the highest standards of craftsmanship.',
    images: importAll(require.context('../assets/projects/new-construction/two-story-thayer', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
];

export const renovationProjects = [
  {
    id: 'brown-project',
    name: 'Brown Avenue Project',
    description: 'A comprehensive whole-home renovation on Brown Avenue, transforming every room with modern upgrades and premium materials.',
    images: importAll(require.context('../assets/projects/renovation/brown-project', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'thomasville',
    name: 'Thomasville Project',
    description: 'A stunning renovation bringing new life to a classic home — updated kitchen, bathrooms, and living spaces throughout.',
    images: importAll(require.context('../assets/projects/renovation/thomasville', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
  {
    id: 'turman',
    name: 'Turman Project',
    description: 'The Turman renovation showcases our ability to blend timeless design with modern functionality.',
    images: importAll(require.context('../assets/projects/renovation/turman', false, /\.(png|jpe?g|JPG|webp)$/i)),
  },
];
