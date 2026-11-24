import * as m from "../paraglide/messages.js";
import type { Locale } from "../paraglide/runtime";

import panintiImage1 from "../assets/project-paninti-1.png";
import panintiImage2 from "../assets/project-paninti-2.png";
import parentingHubImage1 from "../assets/project-parenting-hub-1.png";
import parentingHubImage2 from "../assets/project-parenting-hub-2.png";
import kocequImage2 from "../assets/project-kocequ-2.png";

export function getProjects(locale: Locale) {
  const options = { locale };

  return [
    {
      name: m.project_paninti_name({}, options),
      description: m.project_paninti_desc({}, options),
      descriptionExpandedRawHTMLString: m.project_paninti_details({}, options),
      priorityImage: true,
      techStack:
        "Kotlin, Android Jetpack, MVVM, Firebase, Google Maps, Material Design 2".split(
          ", ",
        ),
      images: [
        {
          src: panintiImage1,
          alt: m.project_paninti_listing_alt({}, options),
        },
        {
          src: panintiImage2,
          alt: m.project_paninti_shopping_alt({}, options),
        },
      ],
    },
    {
      name: m.project_parenting_hub_name({}, options),
      description: m.project_parenting_hub_desc({}, options),
      descriptionExpandedRawHTMLString: m.project_parenting_hub_details(
        {},
        options,
      ),
      techStack:
        "Kotlin, Android Jetpack, MVVM, Firebase, Material Design 2".split(
          ", ",
        ),
      images: [
        {
          src: parentingHubImage1,
          alt: m.project_parenting_hub_feed_alt({}, options),
        },
        {
          src: parentingHubImage2,
          alt: m.project_parenting_hub_community_alt({}, options),
        },
      ],
    },
    {
      name: m.project_kocequ_name({}, options),
      description: m.project_kocequ_desc({}, options),
      descriptionExpandedRawHTMLString: m.project_kocequ_details({}, options),
      techStack: "Java, Kotlin, XML, MVP, Spring Boot".split(", "),
      images: [
        {
          src: kocequImage2,
          alt: m.project_kocequ_app_alt({}, options),
        },
      ],
    },
  ];
}
