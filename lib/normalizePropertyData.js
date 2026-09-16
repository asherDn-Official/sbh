// lib/normalizePropertyData.js
//
// Converts any of the three location data files (katrambakkam, nandhambakkam,
// thaiyur) into a single canonical shape consumed by <PropertiesPage />.
//
// Every field that exists in ANY of the three source files is explicitly
// mapped here. No silent drops. No JSX-side guessing.

export function normalizePropertyData(raw) {
  if (!raw) return null;

  return {
    slug: raw.slug,
    metaTitle: raw.metaTitle,
    metaDescription: raw.metaDescription,

    // ---------------------------------------------------------------
    // 1. HERO
    // ---------------------------------------------------------------
    hero: raw.hero
      ? {
          title: raw.hero.title,
          subtitle: raw.hero.subtitle,
          // katrambakkam uses `description`; others use `p1`
          paragraphs: [
            raw.hero.description || raw.hero.p1,
            raw.hero.p2,
            raw.hero.p3,
            raw.hero.p4,
          ].filter(Boolean),
          callout: raw.hero.kundrathurNote || null,
          ctaPrimary: raw.hero.ctaPrimary || "Browse Available Resale Plots",
          ctaSecondary: raw.hero.ctaSecondary || "Book a Free Site Visit",
          image: raw.hero.heroImage,
          imageAlt: raw.hero.heroImageAlt || raw.hero.title,
        }
      : null,

    // ---------------------------------------------------------------
    // 2. QUICK SEARCH
    // ---------------------------------------------------------------
    quickSearch: raw.quickSearch
      ? {
          title: raw.quickSearch.title,
          subtitle: raw.quickSearch.subtitle,
          intro: raw.quickSearch.intro,
          criteria: raw.quickSearch.criteria || [],
          // katrambakkam: specificTitle / specificIntro / specificFields / specificNote
          specificBlock: raw.quickSearch.specificTitle
            ? {
                title: raw.quickSearch.specificTitle,
                intro: raw.quickSearch.specificIntro,
                fields: raw.quickSearch.specificFields,
                note: raw.quickSearch.specificNote,
              }
            : null,
          // thaiyur: nearYouTitle / nearYouText / formIntro / formFields / note
          nearYouBlock: raw.quickSearch.nearYouTitle
            ? {
                title: raw.quickSearch.nearYouTitle,
                text: raw.quickSearch.nearYouText,
                formIntro: raw.quickSearch.formIntro,
                formFields: raw.quickSearch.formFields,
                note: raw.quickSearch.note,
              }
            : null,
          // nandhambakkam: lowBudgetTitle / lowBudgetIntro / lowBudgetFields / lowBudgetNote / lowBudgetNote2
          lowBudgetBlock: raw.quickSearch.lowBudgetTitle
            ? {
                title: raw.quickSearch.lowBudgetTitle,
                intro: raw.quickSearch.lowBudgetIntro,
                fields: raw.quickSearch.lowBudgetFields,
                note: raw.quickSearch.lowBudgetNote,
                note2: raw.quickSearch.lowBudgetNote2,
              }
            : null,
          cta: raw.quickSearch.cta || "Get Property Options",
        }
      : null,

    // ---------------------------------------------------------------
    // 3. WHY CONSIDER
    // ---------------------------------------------------------------
    whyConsider: raw.whyConsider
      ? {
          title: raw.whyConsider.title,
          description: raw.whyConsider.description,
          subDescription: raw.whyConsider.subDescription,
          intro: raw.whyConsider.intro,
          items:
            raw.whyConsider.checklist || raw.whyConsider.factors || [],
          warnings: [
            raw.whyConsider.warningNote,
            raw.whyConsider.warningNote2,
          ].filter(Boolean),
          footerNote: raw.whyConsider.footerNote,
        }
      : null,

    // ---------------------------------------------------------------
    // 4. FEATURED PLOTS
    // ---------------------------------------------------------------
    featuredPlots: raw.featuredPlots
      ? {
          title: raw.featuredPlots.title,
          subtitle: raw.featuredPlots.subtitle,
          note: raw.featuredPlots.note,
          typesIntro: raw.featuredPlots.typesIntro,
          availableTypes: raw.featuredPlots.availableTypes || [],
          layoutNotice: raw.featuredPlots.layoutNotice,
          listings: raw.featuredPlots.listings || [],
          ctaBlock:
            raw.featuredPlots.ctaTitle ||
            raw.featuredPlots.ctaDescription ||
            raw.featuredPlots.compareIntro ||
            raw.featuredPlots.compareFields ||
            raw.featuredPlots.cta
              ? {
                  title: raw.featuredPlots.ctaTitle,
                  description: raw.featuredPlots.ctaDescription,
                  compareIntro: raw.featuredPlots.compareIntro,
                  compareFields: raw.featuredPlots.compareFields,
                  cta: raw.featuredPlots.cta,
                }
              : null,
          dynamicNote: raw.featuredPlots.dynamicNote,
        }
      : null,

    // ---------------------------------------------------------------
    // 5. LOCATION OVERVIEW
    // ---------------------------------------------------------------
    locationOverview: raw.locationOverview
      ? {
          title: raw.locationOverview.title,
          description: raw.locationOverview.description,
          subDescription: raw.locationOverview.subDescription,
          periyarBlock: raw.locationOverview.periyarNagarSubhead
            ? {
                subhead: raw.locationOverview.periyarNagarSubhead,
                text: raw.locationOverview.periyarNagarText,
                text2: raw.locationOverview.periyarNagarText2,
              }
            : null,
          intro: raw.locationOverview.intro,
          factors: raw.locationOverview.factors || [],
          footerNote: raw.locationOverview.footerNote,
          image: raw.locationOverview.mapImage,
          imageAlt: raw.locationOverview.mapImageAlt,
        }
      : null,

    // ---------------------------------------------------------------
    // 6. LAND SALE
    // ---------------------------------------------------------------
    landSale: (raw.landSaleOptions || raw.landSale)
      ? {
          title: (raw.landSaleOptions || raw.landSale).title,
          description: (raw.landSaleOptions || raw.landSale).description,
          subDescription: (raw.landSaleOptions || raw.landSale)
            .subDescription,
          criteria: (raw.landSaleOptions || raw.landSale).criteria || [],
          typesIntro: (raw.landSaleOptions || raw.landSale).typesIntro,
          types: (raw.landSaleOptions || raw.landSale).types || [],
          footerNote: (raw.landSaleOptions || raw.landSale).footerNote,
          ramapuramBlock: (raw.landSaleOptions || raw.landSale)
            .ramapuramSubhead
            ? {
                subhead: (raw.landSaleOptions || raw.landSale)
                  .ramapuramSubhead,
                note: (raw.landSaleOptions || raw.landSale).ramapuramNote,
                warning: (raw.landSaleOptions || raw.landSale)
                  .ramapuramWarning,
              }
            : null,
          omrBlock: (raw.landSaleOptions || raw.landSale).omrSubhead
            ? {
                subhead: (raw.landSaleOptions || raw.landSale).omrSubhead,
                note: (raw.landSaleOptions || raw.landSale).omrNote,
              }
            : null,
          cta: (raw.landSaleOptions || raw.landSale).cta,
        }
      : null,

    // ---------------------------------------------------------------
    // 7. RESIDENTIAL PLOTS
    // ---------------------------------------------------------------
    residentialPlots: raw.residentialPlots
      ? {
          title: raw.residentialPlots.title,
          description: raw.residentialPlots.description,
          subDescription: raw.residentialPlots.subDescription,
          preferences: raw.residentialPlots.preferences || [],
          intro: raw.residentialPlots.intro,
          checklist: raw.residentialPlots.checklist || [],
          premiumSubhead: raw.residentialPlots.premiumSubhead,
          premiumNote: raw.residentialPlots.premiumNote,
          closingSubhead: raw.residentialPlots.closingSubhead,
          closingNote: raw.residentialPlots.closingNote,
          footerNote: raw.residentialPlots.footerNote,
        }
      : null,

    // ---------------------------------------------------------------
    // 8. APPROVED PLOTS
    // ---------------------------------------------------------------
    approvedPlots: raw.approvedPlots
      ? {
          title: raw.approvedPlots.title,
          description: raw.approvedPlots.description,
          subDescription: raw.approvedPlots.subDescription,
          intro: raw.approvedPlots.intro,
          checkpoints: raw.approvedPlots.checkpoints || [],
          blocks: [
            {
              heading: raw.approvedPlots.dtcpTitle,
              body: null,
            },
            {
              heading: raw.approvedPlots.dtcpSubhead,
              body: raw.approvedPlots.dtcpText,
            },
            {
              heading: null,
              body: raw.approvedPlots.dtcpNote,
            },
            {
              heading: null,
              body: raw.approvedPlots.dtcpWarning,
              isWarning: true,
            },
            {
              heading: raw.approvedPlots.cmdaSubhead,
              body: raw.approvedPlots.cmdaText,
            },
            {
              heading: null,
              body: raw.approvedPlots.cmdaText2,
            },
            {
              heading: raw.approvedPlots.verificationSubhead,
              body: raw.approvedPlots.verificationNote,
            },
            {
              heading: raw.approvedPlots.verificationIntro,
              body: null,
            },
          ].filter((b) => b.heading || b.body),
          verificationItems: raw.approvedPlots.verificationItems || [],
          ctaPrimary:
            raw.approvedPlots.ctaPrimary || raw.approvedPlots.cta || null,
          ctaSecondary: raw.approvedPlots.ctaSecondary || null,
        }
      : null,

    // ---------------------------------------------------------------
    // 9. GUIDELINE VALUE
    // ---------------------------------------------------------------
    guidelineValue: raw.guidelineValue
      ? {
          title: raw.guidelineValue.title,
          description: raw.guidelineValue.description,
          subDescription: raw.guidelineValue.subDescription,
          intro: raw.guidelineValue.intro,
          points: raw.guidelineValue.points || [],
          changeNote: raw.guidelineValue.changeNote,
          variabilityNote: raw.guidelineValue.variabilityNote,
          verificationNote: raw.guidelineValue.verificationNote,
        }
      : null,

    // ---------------------------------------------------------------
    // 10. AVERAGE PRICE (handles both top-level and pricing-nested)
    // ---------------------------------------------------------------
    averagePrice: buildAveragePrice(raw),

    // ---------------------------------------------------------------
    // 11. PROPERTY TYPES
    // ---------------------------------------------------------------
    propertyTypes: raw.propertyTypes
      ? {
          title: raw.propertyTypesTitle || "Property Types",
          intro: raw.propertyTypesIntro,
          items: raw.propertyTypes,
          cta: raw.propertyTypesCta,
        }
      : null,

    // ---------------------------------------------------------------
    // 12. PRICING
    // ---------------------------------------------------------------
    pricing: raw.pricing
      ? {
          title: raw.pricing.title,
          buyerIntro: raw.pricing.buyerIntro,
          buyerQuestion: raw.pricing.buyerQuestion,
          buyerQuestionDetail: raw.pricing.buyerQuestionDetail,
          description: raw.pricing.description,
          factors: raw.pricing.factors || [],
          kundrathurBlock: raw.pricing.kundrathurSubhead
            ? {
                subhead: raw.pricing.kundrathurSubhead,
                text: raw.pricing.kundrathurText,
                note: raw.pricing.kundrathurNote,
              }
            : null,
          perSqftBlock: raw.pricing.perSqftSubhead
            ? {
                subhead: raw.pricing.perSqftSubhead,
                text: raw.pricing.perSqftText,
              }
            : null,
          resaleBlock: raw.pricing.resaleSubhead
            ? {
                subhead: raw.pricing.resaleSubhead,
                note: raw.pricing.resaleNote,
                compareIntro: raw.pricing.compareIntro,
                compareFormula: raw.pricing.compareFormula,
              }
            : null,
          formulaBlock:
            raw.pricing.formulaIntro ||
            raw.pricing.formulaExample ||
            raw.pricing.formula
              ? {
                  intro: raw.pricing.formulaIntro,
                  formula:
                    raw.pricing.formulaExample || raw.pricing.formula,
                  exampleIntro: raw.pricing.exampleIntro,
                  exampleSetup: raw.pricing.exampleSetup,
                  example:
                    raw.pricing.sampleCalculation || raw.pricing.example,
                  exampleNote: raw.pricing.exampleNote,
                  priceNote: raw.pricing.priceNote,
                }
              : null,
          subHeadingBlock: raw.pricing.subHeading
            ? {
                subhead: raw.pricing.subHeading,
                text: raw.pricing.subDescription,
                comparisonIntro: raw.pricing.comparisonIntro,
              }
            : null,
          // The pricing table — only katrambakkam has this
          table: raw.pricing.priceTable || null,
          tableHeaders: raw.pricing.tableHeaders || null,
          tableNote: raw.pricing.tableNote,
          extraNotes: [
            raw.pricing.kundrathurPriceText,
            raw.pricing.averagePriceNote,
            raw.pricing.guidelineValueNote,
            raw.pricing.liveNote,
          ].filter(Boolean),
          cta: raw.pricing.cta,
        }
      : null,

    // ---------------------------------------------------------------
    // 13. LAND RATES
    // ---------------------------------------------------------------
    landRates: raw.landRates
      ? {
          title: raw.landRates.title,
          description: raw.landRates.description,
          formulaIntro: raw.landRates.formulaIntro,
          formula: raw.landRates.formula,
          exampleSubhead: raw.landRates.exampleSubhead,
          exampleSetup: raw.landRates.exampleSetup,
          example: raw.landRates.example,
          exampleNote: raw.landRates.exampleNote,
          tableIntro: raw.landRates.tableIntro,
          table: raw.landRates.priceTable || null,
          tableHeaders: raw.landRates.tableHeaders || null,
          cta: raw.landRates.cta,
        }
      : null,

    // ---------------------------------------------------------------
    // 14. LOW BUDGET
    // ---------------------------------------------------------------
    lowBudget: raw.lowBudget
      ? {
          title: raw.lowBudget.title,
          description: raw.lowBudget.description,
          intro: raw.lowBudget.intro,
          definitionList: raw.lowBudget.definitionList || [],
          exampleIntro: raw.lowBudget.exampleIntro,
          example: raw.lowBudget.example,
          costNote: raw.lowBudget.costNote,
          warningIntro: raw.lowBudget.warningIntro,
          alsoConsiderIntro: raw.lowBudget.alsoConsiderIntro,
          additionalCosts: raw.lowBudget.additionalCosts || [],
          warning: raw.lowBudget.warning,
          footerNote: raw.lowBudget.footerNote,
          availabilityBlock: raw.lowBudget.availabilitySubhead
            ? {
                subhead: raw.lowBudget.availabilitySubhead,
                note: raw.lowBudget.availabilityNote,
                text: raw.lowBudget.availabilityText,
              }
            : null,
          cta: raw.lowBudget.cta,
        }
      : null,

    // ---------------------------------------------------------------
    // 15. INDUSTRIAL LAND
    // ---------------------------------------------------------------
    industrialLand: raw.industrialLand
      ? {
          title: raw.industrialLand.title,
          description: raw.industrialLand.description,
          checklist: raw.industrialLand.checklist || [],
          footerNote: raw.industrialLand.footerNote,
          cta: raw.industrialLand.cta,
        }
      : null,

    // ---------------------------------------------------------------
    // 16. PALLAVAN NAGAR
    // ---------------------------------------------------------------
    pallavanNagar: raw.pallavanNagar
      ? {
          title: raw.pallavanNagar.title,
          description: raw.pallavanNagar.description,
          listingIntro: raw.pallavanNagar.listingIntro,
          listingFields: raw.pallavanNagar.listingFields || [],
          image: raw.pallavanNagar.image,
          imageAlt: raw.pallavanNagar.imageAlt,
          cta: raw.pallavanNagar.cta,
        }
      : null,

    // ---------------------------------------------------------------
    // 17. GATED COMMUNITY
    // ---------------------------------------------------------------
    gatedCommunity: raw.gatedCommunity
      ? {
          title: raw.gatedCommunity.title,
          description: raw.gatedCommunity.description,
          intro: raw.gatedCommunity.intro,
          features: raw.gatedCommunity.features || [],
          resaleBlock: raw.gatedCommunity.resaleSubhead
            ? {
                subhead: raw.gatedCommunity.resaleSubhead,
                note: raw.gatedCommunity.resaleNote,
                projectNote: raw.gatedCommunity.projectNote,
              }
            : null,
        }
      : null,

    // ---------------------------------------------------------------
    // 18. INVESTMENT PLOTS
    // ---------------------------------------------------------------
    investmentPlots: raw.investmentPlots
      ? {
          title: raw.investmentPlots.title,
          description: raw.investmentPlots.description,
          intro: raw.investmentPlots.intro,
          factors: raw.investmentPlots.factors || [],
          disclaimer: raw.investmentPlots.disclaimer,
          subheadBlock: raw.investmentPlots.subhead
            ? {
                subhead: raw.investmentPlots.subhead,
                note: raw.investmentPlots.subheadNote,
              }
            : null,
        }
      : null,

    // ---------------------------------------------------------------
    // 19. SHRIHARI NIVAS
    // ---------------------------------------------------------------
    shrihariNivas: raw.shrihariNivas
      ? {
          title: raw.shrihariNivas.title,
          description: raw.shrihariNivas.description,
          listingFields: raw.shrihariNivas.listingFields || [],
          warning: raw.shrihariNivas.warning,
        }
      : null,

    // ---------------------------------------------------------------
    // 20. AKSHAYA TODAY
    // ---------------------------------------------------------------
    akshayaToday: raw.akshayaToday
      ? {
          title: raw.akshayaToday.title,
          description: raw.akshayaToday.description,
          intro: raw.akshayaToday.intro,
          listingFields: raw.akshayaToday.listingFields || [],
          verificationBlock: raw.akshayaToday.verificationSubhead
            ? {
                subhead: raw.akshayaToday.verificationSubhead,
                note: raw.akshayaToday.verificationNote,
              }
            : null,
        }
      : null,

    // ---------------------------------------------------------------
    // 21. FARM LAND
    // ---------------------------------------------------------------
    farmLand: raw.farmLand
      ? {
          title: raw.farmLand.title,
          description: raw.farmLand.description,
          subDescription: raw.farmLand.subDescription,
          intro: raw.farmLand.intro,
          factors: raw.farmLand.factors || [],
          warning: raw.farmLand.warning,
        }
      : null,

    // ---------------------------------------------------------------
    // 22. CHOOSING CRITERIA
    // ---------------------------------------------------------------
    choosingCriteria: raw.choosingCriteria
      ? {
          title: raw.choosingTitle || "Plot Selection Checklist",
          intro: raw.choosingIntro,
          items: raw.choosingCriteria,
        }
      : null,

    // ---------------------------------------------------------------
    // 23. COMPARISON TABLE
    // ---------------------------------------------------------------
    comparison: raw.comparisonTable
      ? {
          title:
            raw.comparisonTitle ||
            "Resale Plot vs New Layout Comparison",
          rows: raw.comparisonTable,
          note: raw.comparisonNote,
        }
      : null,

    // ---------------------------------------------------------------
    // 24. CONNECTIVITY
    // ---------------------------------------------------------------
    connectivity: raw.connectivity
      ? {
          title: raw.connectivity.title,
          description: raw.connectivity.description,
          intro: raw.connectivity.intro,
          hubs: raw.connectivity.hubs || raw.connectivity.destinations || [],
          amenitiesIntro: raw.connectivity.amenitiesIntro,
          amenities: raw.connectivity.amenities || [],
          footerNote: raw.connectivity.footerNote,
        }
      : null,

    // ---------------------------------------------------------------
    // 25. VERIFICATION STEPS
    // ---------------------------------------------------------------
    verification: raw.verificationSteps
      ? {
          title:
            raw.verificationTitle ||
            "How to Evaluate a Resale Plot",
          steps: raw.verificationSteps,
        }
      : null,

    // ---------------------------------------------------------------
    // 26. DOCUMENTS
    // ---------------------------------------------------------------
    documents: (raw.documentsSection || raw.documents)
      ? {
          title:
            raw.documentsSection?.title ||
            "Documents to Verify Before Buying",
          intro: raw.documentsSection?.intro,
          items:
            raw.documentsSection?.documents || raw.documents || [],
          importantLabel:
            raw.documentsSection?.importantLabel || "Important",
          importantNote: raw.documentsSection?.importantNote,
          importantWarning: raw.documentsSection?.importantWarning,
        }
      : null,

    // ---------------------------------------------------------------
    // 27. CHEAPEST LAND
    // ---------------------------------------------------------------
    cheapestLand: raw.cheapestLand
      ? {
          title: raw.cheapestLand.title,
          description: raw.cheapestLand.description,
          intro: raw.cheapestLand.intro,
          factors: raw.cheapestLand.factors || [],
          comparisonNote: raw.cheapestLand.comparisonNote,
          footerNote: raw.cheapestLand.footerNote,
        }
      : null,

    // ---------------------------------------------------------------
    // 28. BEST AREA (unifies bestArea and bestPlot)
    // ---------------------------------------------------------------
    bestArea: buildBestArea(raw),

    // ---------------------------------------------------------------
    // 29. NEARBY LOCATIONS
    // ---------------------------------------------------------------
    nearby: raw.nearbyLocations
      ? {
          title: raw.nearbyTitle || "Explore Nearby Properties",
          intro: raw.nearbyIntro,
          items: raw.nearbyLocations,
          cta: raw.nearbyCta,
        }
      : null,

    // ---------------------------------------------------------------
    // 30. TESTIMONIALS
    // ---------------------------------------------------------------
    testimonials: buildTestimonials(raw),

    // ---------------------------------------------------------------
    // 31. FAQS
    // ---------------------------------------------------------------
    faqs: raw.faqs || [],

    // ---------------------------------------------------------------
    // 32. FINAL CTA
    // ---------------------------------------------------------------
    finalCta: raw.finalCta
      ? {
          title: raw.finalCta.title,
          description: raw.finalCta.description,
          description2: raw.finalCta.description2,
          formIntro: raw.finalCta.formIntro,
          fields: raw.finalCta.fields || {},
          ctaPrimary: raw.finalCta.ctaPrimary,
          ctaSecondary: raw.finalCta.ctaSecondary,
        }
      : null,

    // ---------------------------------------------------------------
    // 33. INTERNAL LINKS
    // ---------------------------------------------------------------
    internalLinks: raw.internalLinking || raw.internalLinks
      ? {
          title:
            raw.internalLinking?.title || "Explore More Properties",
          intro: raw.internalLinking?.intro,
          items: raw.internalLinking?.links || raw.internalLinks || [],
          note: raw.internalLinking?.note,
        }
      : null,

    // ---------------------------------------------------------------
    // 34. SEO FOOTER
    // ---------------------------------------------------------------
    // seoFooter: raw.seoFooter
    //   ? {
    //       title: raw.seoFooter.title,
    //       // katrambakkam: description; others: p1/p2/p3
    //       paragraphs: [
    //         raw.seoFooter.description,
    //         raw.seoFooter.p1,
    //         raw.seoFooter.p2,
    //         raw.seoFooter.p3,
    //       ].filter(Boolean),
    //       links: raw.seoFooter.links,
    //     }
    //   : null,
    seoFooter: raw.seoFooter
  ? {
      title: raw.seoFooter.title,
      paragraphs: [
        raw.seoFooter.description,
        raw.seoFooter.p1,
        raw.seoFooter.p2,
        raw.seoFooter.p3,
      ].filter(Boolean),
      // Convert "A | B | C" → [{ label, href }, ...]
      links: parseSeoLinks(raw.seoFooter.links),
    }
  : null,
  };
}

// =====================================================================
// Helper builders for the tricky cases
// =====================================================================

function buildAveragePrice(raw) {
  // Case 1: top-level averagePrice (nandhambakkam, thaiyur)
  if (raw.averagePrice) {
    return {
      title: raw.averagePrice.title,
      description: raw.averagePrice.description,
      subDescription: raw.averagePrice.subDescription,
      intro: raw.averagePrice.intro,
      factors: raw.averagePrice.factors || [],
      tableIntro: raw.averagePrice.tableIntro,
      tableTitle: raw.averagePrice.tableTitle,
      table: raw.averagePrice.sampleTable || null,
      tableNote: raw.averagePrice.tableNote,
    };
  }
  // Case 2: nested inside pricing (katrambakkam)
  if (
    raw.pricing &&
    (raw.pricing.averageTitle || raw.pricing.averageDescription)
  ) {
    return {
      title: raw.pricing.averageTitle,
      description: raw.pricing.averageDescription,
      subDescription: null,
      intro: raw.pricing.tableIntro,
      factors: [],
      tableIntro: raw.pricing.tableIntro,
      tableTitle: raw.pricing.tableTitle,
      table: raw.pricing.priceTable || null,
      tableNote: raw.pricing.tableNote,
    };
  }
  return null;
}

function buildBestArea(raw) {
  const src = raw.bestArea || raw.bestPlot;
  if (!src) return null;
  return {
    title: src.title,
    description: src.description,
    intro: src.intro,
    intro2: src.intro2,
    factors: src.factors || [],
    footerNote: src.footerNote,
  };
}

function buildTestimonials(raw) {
  const sec = raw.testimonialsSection;
  const list = sec?.testimonials || raw.testimonials || [];
  if (!sec && !raw.testimonials) return null;
  return {
    title: sec?.title || "Testimonials",
    intro: sec?.intro,
    warning: sec?.warning,
    fields: sec?.reviewFields || [],
    items: list,
    cta: sec?.cta,
  };
}

// Converts a pipe-separated SEO footer links string into a list of
// { label, href } objects with sensible default URL slugs.
function parseSeoLinks(linksString) {
  if (!linksString) return [];

  const slugMap = {
    "plots for sale in chennai": "/properties",
    "resale plots": "/properties",
    "resale plots in chennai": "/properties",
    "residential plots": "/properties",
    "residential plots in chennai": "/properties",
    "katrambakkam properties": "/properties/approved-resale-plots-kattrambakkam-chennai",
    "nandhambakkam properties": "/properties/approved-resale-plots-nandhambakkam-chennai",
    "thaiyur omr properties": "/properties/approved-resale-plots-thaiyur-omr-chennai",
    "kundrathur properties": "/properties/approved-resale-plots-nandhambakkam-chennai",
    "gated community plots": "/properties/approved-resale-plots-thaiyur-omr-chennai",
    "omr investment plots": "/properties/approved-resale-plots-thaiyur-omr-chennai",
    "buyer guides": "/faq",
    "contact us": "/contact-us",
  };

  return linksString
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((label) => {
      const href = slugMap[label.toLowerCase()] || "#";
      return { label, href };
    });
}

export default normalizePropertyData;