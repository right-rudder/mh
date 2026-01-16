import { defineCollection, z } from "astro:content";

const programsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pricingRange: z.string().optional(),
    order: z.number().optional(),
    image: z.string().optional(),
    alt: z.string().optional(),
    reverse: z.boolean().optional(),
    top: z.boolean().optional(),
    programIntroduction: z.object({
      title: z.string().optional(),
      upperheader: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      highlights: z.array(z.object({
        highlightName: z.string(),
        highlightValue: z.string(),
        pricingObservation: z.string().optional()
      })).optional(),
      programHighlights: z.object({
        benefits: z.array(z.string()).optional(),
        requirements: z.array(z.string()).optional()
      }).optional()
    }).optional(),
    programExpectations: z.object({
      title: z.string(),
      upperheader: z.string().optional(),
      mainImage: z.string().optional(),
      mainImageAlt: z.string().optional(),
      descriptionParagraphs: z.array(z.string()),
      listItems: z.array(z.string()).optional()
    }).optional(),
    firstCTA: z.object({
      mainImage: z.string().optional(),
      title: z.string().optional(),
      upperheader: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
    }).optional(),
    whatIsIncluded: z.object({
      mainImage: z.string().optional(),
      title: z.string().optional(),
      upperheader: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      bulletPointLists: z.array(z.object({
        title: z.string(),
        items: z.array(z.string())
      })).optional()
    }).optional(),
    whyUs: z.object({
      title: z.string().optional(),
      upperheader: z.string().optional(),
      topicTitle: z.string().optional(),
      topicDescriptionParagraphs: z.array(z.string()).optional(),
      bulletTitle: z.string().optional(),
      bulletDescriptionParagraphs: z.array(z.string()).optional(),
      bulletPoints: z.array(z.string()).optional(),
      closingTitle: z.string().optional(),
      closingDescriptionParagraphs: z.array(z.string()).optional(),
    }).optional(),
    careerPathways: z.object({
      title: z.string(),
      upperheader: z.string().optional(),
      mainImage: z.string().optional(),
      mainImageAlt: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      opportunities: z.array(z.string()),
      disclaimer: z.string().optional()
    }).optional(),
    targetAudience: z.object({
      title: z.string(),
      items: z.array(z.string()),
      notFor: z.string().optional()
    }).optional(),
    trainingProgression: z.object({
      title: z.string().optional(),
      upperheader: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      phases: z.array(z.object({
        phaseTitle: z.string(),
        phaseBulletPoints: z.array(z.string())
      })).optional(),
      outcome: z.string().optional()
    }).optional(),
    enrollmentProcess: z.object({
      title: z.string(),
      upperheader: z.string().optional(),
      steps: z.array(z.object({
        stepNumber: z.number(),
        title: z.string(),
        description: z.string()
      }))
    }).optional(),
    faq: z.object({
      title: z.string().optional(),
      upperheader: z.string().optional(),
      qnas: z.array(z.object({
        question: z.string(),
        answer: z.string()
      })).optional()
    }).optional(),
    finalCTA: z.object({
      mainImage: z.string().optional(),
      mainImageAlt: z.string().optional(),
      title: z.string().optional(),
      upperheader: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      mainButtonText: z.string().optional(),
      mainButtonLink: z.string().optional(),
      secondButtonText: z.string().optional(),
      secondButtonLink: z.string().optional(),
    }).optional(),
  }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    alt: z.string().optional(),
    order: z.number().optional(),
    pricingRange: z.string().optional(),
    serviceOverview: z.object({
      upperheader: z.string(),
      title: z.string(),
      image: z.string().optional(),
      alt: z.string().optional(),
      mainParagraphs: z.array(z.string()),
      stats: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })).optional(),
    }),
    capabilities: z.object({
      upperheader: z.string(),
      title: z.string(),
      description: z.string().optional(),
      serviceList: z.array(z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
      })),
    }),
    trustAndLegacy: z.object({
      upperheader: z.string(),
      title: z.string(),
      storyParagraphs: z.array(z.string()),
      quote: z.string().optional(),
      quoteAuthor: z.string().optional(),
      image: z.string().optional(),
      alt: z.string().optional(),
      badges: z.array(z.string()).optional(),
    }),
    operationalStandards: z.object({
      upperheader: z.string(),
      title: z.string(),
      mainImage: z.string(),
      features: z.array(z.string()),
      aogNote: z.string().optional(),
    }),
    integratedEcosystem: z.object({
      upperheader: z.string(),
      title: z.string(),
      description: z.string(),
      partners: z.array(z.object({
        name: z.string(),
        role: z.string(),
        description: z.string(),
        href: z.string().optional()
      })),
    }),
    faq: z.object({
      title: z.string().optional(),
      upperheader: z.string().optional(),
      qnas: z.array(z.object({
        question: z.string(),
        answer: z.string()
      })).optional()
    }).optional(),
    finalCTA: z.object({
      mainImage: z.string().optional(),
      title: z.string().optional(),
      upperheader: z.string().optional(),
      descriptionParagraphs: z.array(z.string()).optional(),
      mainButtonText: z.string().optional(),
      mainButtonLink: z.string().optional(),
    }).optional(),
  }),
});

const fleetCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string().optional(),
    model: z.string().optional(),
    description: z.string().optional(),
    tailNumber: z.string().optional(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    ).optional(),
    specifications: z
      .object({
        engine: z.string().optional(),
        horsepower: z.number().optional(),
        seats: z.number().optional(),
        cruiseSpeed: z.string().optional(),
        maxWeight: z.string().optional(),
      })
      .optional(),
    features: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});


export const collections = {
  programs: programsCollection,
  services: servicesCollection,
  fleet: fleetCollection,
  blog: blogCollection,
};
