<script setup>
  const {locale} = useI18n();

  // Portfolio categories data
  const portfolioData = {
    pl: [
      {
        id: "blog-texts",
        title: "Teksty na blogi",
        description:
          "Artykuły blogowe z SEO, treści edukacyjne i branżowe dopasowane do grup docelowych.",
        icon: "heroicons:document-text",
        image: "/images/portfolio/blog-preview.jpg",
        link: "https://drive.google.com/drive/folders/blog-texts-id",
        tags: ["SEO", "Content Marketing", "Blog Writing"],
      },
      {
        id: "presell-pages",
        title: "Presell Pages - PRECLE",
        description:
          "Strony przedsprzedażowe przekonujące klientów do zakupu. Copywriting sprzedażowy.",
        icon: "heroicons:megaphone",
        image: "/images/portfolio/presell-preview.jpg",
        link: "https://drive.google.com/drive/folders/presell-pages-id",
        tags: ["Sales Copy", "Conversion", "Landing Pages"],
      },
      {
        id: "google-business",
        title: "Google Wizytówki",
        description:
          "Optymalizacja profili biznesowych Google. Treści zwiększające widoczność lokalną.",
        icon: "heroicons:map-pin",
        image: "/images/portfolio/google-business-preview.jpg",
        link: "https://drive.google.com/drive/folders/google-business-id",
        tags: ["Local SEO", "Google Business", "Local Marketing"],
      },
      {
        id: "canva-designs",
        title: "Canva",
        description:
          "Grafiki do social media, posty, stories, banery reklamowe i materiały marketingowe.",
        icon: "heroicons:photo",
        image: "/images/portfolio/canva-preview.jpg",
        link: "https://drive.google.com/drive/folders/canva-designs-id",
        tags: ["Social Media", "Marketing Graphics", "Canva Design"],
      },
      {
        id: "photoshop-works",
        title: "Adobe Photoshop",
        description:
          "Zaawansowana obróbka zdjęć, kompozycje graficzne i projekty wizualne.",
        icon: "heroicons:camera",
        image: "/images/portfolio/photoshop-preview.jpg",
        link: "https://drive.google.com/drive/folders/photoshop-works-id",
        tags: ["Photo Editing", "Digital Art", "Photoshop"],
      },
      {
        id: "illustrator-projects",
        title: "Adobe Illustrator",
        description:
          "Wektorowe ilustracje, logo, ikony i projekty graficzne o wysokiej jakości.",
        icon: "heroicons:paint-brush",
        image: "/images/portfolio/illustrator-preview.jpg",
        link: "https://drive.google.com/drive/folders/illustrator-projects-id",
        tags: ["Vector Graphics", "Logo Design", "Illustrations"],
      },
    ],
    en: [
      // English versions...
      {
        id: "blog-texts",
        title: "Blog Texts",
        description:
          "SEO blog articles, educational and industry content tailored to target audiences.",
        icon: "heroicons:document-text",
        image: "/images/portfolio/blog-preview.jpg",
        link: "https://drive.google.com/drive/folders/blog-texts-id",
        tags: ["SEO", "Content Marketing", "Blog Writing"],
      },
      // ... reszta kategorii w języku angielskim
    ],
  };

  const portfolioItems = computed(() => {
    return portfolioData[locale.value] || portfolioData.pl;
  });
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="portfolio-container">
      <!-- Header -->
      <div class="portfolio-header">
        <h2 class="portfolio-title">{{ $t("portfolio.title") }}</h2>
        <p class="portfolio-subtitle">{{ $t("portfolio.subtitle") }}</p>
      </div>

      <!-- Portfolio Grid -->
      <div class="portfolio-grid">
        <div
          v-for="item in portfolioItems"
          :key="item.id"
          class="portfolio-card">
          <!-- Card Image/Icon -->
          <div class="card-header">
            <div class="card-icon">
              <Icon :name="item.icon" size="32" />
            </div>
            <!-- <img v-if="item.image" :src="item.image" :alt="item.title" class="card-image" /> -->
          </div>

          <!-- Card Content -->
          <div class="card-content">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>

            <!-- Tags -->
            <div class="card-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="card-footer">
            <a :href="item.link" target="_blank" class="view-button">
              {{ $t("portfolio.viewWork") }}
              <Icon name="heroicons:arrow-top-right-on-square" size="16" />
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="portfolio-cta">
        <h3>{{ $t("portfolio.ctaTitle") }}</h3>
        <p>{{ $t("portfolio.ctaDescription") }}</p>
        <a href="#contact" class="cta-button">
          {{ $t("portfolio.ctaButton") }}
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/variables";

  .portfolio-section {
    padding: 6rem 0;
    background-color: white;

    @media (max-width: 964px) {
      padding: 4rem 0;
    }
  }

  .portfolio-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .portfolio-header {
    text-align: center;
    margin-bottom: 4rem;

    .portfolio-title {
      font-size: 2.5rem;
      color: $text-primary;
      margin-bottom: 1rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .portfolio-subtitle {
      font-size: 1.2rem;
      color: $text-secondary;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .portfolio-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 40px rgba(139, 95, 191, 0.1);
    transition: all 0.3s ease;
    border: 1px solid rgba(139, 95, 191, 0.08);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(139, 95, 191, 0.2);
    }
  }

  .card-header {
    margin-bottom: 1.5rem;

    .card-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, $accent, lighten($accent, 10%));
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 1rem;
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .card-content {
    margin-bottom: 1.5rem;

    .card-title {
      font-size: 1.4rem;
      color: $text-primary;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }

    .card-description {
      color: $text-secondary;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .tag {
      background-color: rgba(139, 95, 191, 0.1);
      color: $accent;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }

  .card-footer {
    .view-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: $accent;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: $border-radius;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: darken($accent, 10%);
        transform: translateX(2px);
      }
    }
  }

  .portfolio-cta {
    text-align: center;
    background: linear-gradient(135deg, $bg-primary, $bg-secondary);
    padding: 3rem;
    border-radius: 20px;

    h3 {
      font-size: 1.8rem;
      color: $text-primary;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      color: $text-secondary;
      font-size: 1.1rem;
      margin-bottom: 2rem;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-button {
      display: inline-block;
      background-color: $accent;
      color: white;
      padding: 1rem 2rem;
      border-radius: $border-radius;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(139, 95, 191, 0.3);

      &:hover {
        background-color: darken($accent, 10%);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(139, 95, 191, 0.4);
      }
    }
  }
</style>
