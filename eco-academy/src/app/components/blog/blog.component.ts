import { Component, input } from '@angular/core';
import { BlogPostComponent, PostData } from '../blog-post/blog-post.component';

export interface HeaderImageData {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-blog',
  imports: [ BlogPostComponent ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  topicHeaderImage = input<HeaderImageData>();
  post1Data: PostData = {
    date: '26.07.2026',
    title: "Wait... THAT's a dune forest?",
    blocks: [
      { 
        type: 'image', url: 'assets/images/blog-images/gis/dune-forest-satelite.png',
        alt: 'A satelite image of thick green forest.',
        caption: "Satelite image of a 'dune forest' taken from Google Maps."
      },
      { 
        type: 'text', html: 
          `<p>
              The conundrum started when I was wrangling table joins for the first time in QGIS.
              I'd sourced <a href="https://data-aucklandcouncil.opendata.arcgis.com/documents/7af316a22b694de0a5959042fe435cc4/about">
              some council data</a> on ecosystem types around Auckland, and was perturbed to 
              find that "dune forests" were showing up far inland, in areas I had visited and knew 
              for certain did not feature sand dunes. I thought of course that I had wholly messed up 
              the table join and that therefore nothing in the map was reliable. But a thorough check 
              revealed no issues with the placement of other well-known habitats / forest types.
          </p>` 
      },
      { 
        type: 'image', url: 'assets/images/blog-images/gis/gis-dune-forest.png',
        alt: 'A QGIS screenshot showing a section of Auckland with several dune forests marked near the West Coast.',
        caption: 'Screenshot from QGIS with dune forests marked in blue.'
      },
      {  
        type: 'text', html:
          `<p>
            It turns out, inland dune forests aren't uncommon in West Auckland. But why are they called that, 
            given the ones I've seen simply look like regular forests?
          </p>
          <p>
              The answer lies beneath the forest and topsoil. In a bizarre twist, the sand dunes are still there today, 
              they're simply buried (sometimes referred to as fossilized dunes). Strong westerly winds blowing sand 
              inland caused the dunes to migrate further in from the coast, where eventually vegetation took hold and 
              stabilized them through a gradual process known as ecological succession (Walrond, 2009). The video below explains how 
              ecological succession can turn bare sand dunes into forests over time, i.e. 'dune forests'.
          </p>`
      },
      {
        type: 'video', url: 'https://www.youtube-nocookie.com/embed/kgojhuSnwo4?si=f4nvlmK3mJgNQw6p?origin=https://johnathanlancelot.github.io/EcoAcademy/public/gis.html',
        caption: 'A video explaining ecological succession using the Indiana Dunes National Park as an example (Anderson, 2025).'
      },
      {
        type: 'text', html:
          `<p>
            Dune forests make up a unique ecosystem in New Zealand, favouring trees and other vegetation that can thrive in sandy, fast-draining, nutrient-poor soils. 
            Unfortunately, dune forests here are critically endangered, with less than 1% remaining nationally. Most remaining dune forests are 'seral', meaning they're in the early stage of ecological succession. Here you'll find mostly scrub plants such as kānuka. The dune forest shown in the satelite image above, by contrast, is much older and is possibly dominated by broadleaved trees - perhaps karaka,
            kohekohe, tītoki, māhoe, and pūriri (Singers et al., 2017). Being on private land, I wasn't able to visit this one in person however, so I couldn't say for sure. 
          </p>`
      }
    ],
    sources: [
      'Anderson, C. (2025, April 15). How sand dunes change into a forest - Ecological succession | Indiana Dunes National Park [Video]. YouTube. <a href="https://www.youtube.com/watch?v=kgojhuSnwo4">https://www.youtube.com/watch?v=kgojhuSnwo4</a>',
      'Singers, N., Osborne, B., Lovegrove, T., Jamieson, A., Boow, J., Sawyer, J., Hill, K., Andrews, J., Hill, S., & Webb, C. (2017). Indigenous terrestrial and wetland ecosystems of Auckland. Auckland Council. <a href="https://knowledgeauckland.org.nz/publications/indigenous-terrestrial-and-wetland-ecosystems-of-auckland">https://knowledgeauckland.org.nz/publications/indigenous-terrestrial-and-wetland-ecosystems-of-auckland</a>',
      'Walrond, C. (2009, March 1). Dune lands. Te Ara – The Encyclopedia of New Zealand. <a href="https://teara.govt.nz/en/dune-lands">https://teara.govt.nz/en/dune-lands</a>'
    ]
  };
}
