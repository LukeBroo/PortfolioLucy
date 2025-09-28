<script setup>
  // Fake timeline data dla testów
  const timelineItems = [
    {
      date: "2024 - obecnie",
      title: "Senior Copywriter",
      company: "Agencja Marketingowa XYZ",
      description:
        "Tworzenie treści sprzedażowych i wizerunkowych dla klientów. Komunikacja kryzysowa i budowanie reputacji marki.",
    },
    {
      date: "2023 - 2024",
      title: "Copywriter & Graphic Designer",
      company: "Agencja Marketingowa XYZ",
      description:
        "Pisanie artykułów blogowych z SEO. Rozwój umiejętności w Illustrator i Photoshop.",
    },
    {
      date: "2022 - 2023",
      title: "Junior Copywriter",
      company: "Agencja Marketingowa XYZ",
      description:
        "Początki pracy w agencji. Nauka tworzenia treści na podstawie briefów klientów.",
    },
  ];
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">
      <div class="experience-content">
        <!-- Tekst po lewej -->
        <div class="experience-text">
          <h2 class="experience-title">{{ $t("experience.title") }}</h2>
          <div class="experience-description">
            <p>{{ $t("experience.description1") }}</p>
            <p>{{ $t("experience.description2") }}</p>
            <p>{{ $t("experience.description3") }}</p>
          </div>

          <!-- Portfolio Link -->
          <div class="portfolio-link">
            <a
              href="https://drive.google.com/drive/folders/1_tN5zxJvpv0ecM7-2EywlMjKPgDgSXF2?usp=sharing"
              target="_blank"
              class="portfolio-button">
              {{ $t("experience.portfolioLink") }}
              <Icon name="heroicons:arrow-top-right-on-square" size="20" />
            </a>
          </div>
        </div>

        <!-- Timeline po prawej -->
        <div class="timeline-container">
          <div class="timeline">
            <div
              v-for="(item, index) in timelineItems"
              :key="index"
              class="timeline-item"
              :class="{
                'timeline-item--last': index === timelineItems.length - 1,
              }">
              <!-- Timeline dot -->
              <div class="timeline-dot"></div>

              <!-- Timeline content -->
              <div class="timeline-content">
                <div class="timeline-date">{{ item.date }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <div class="timeline-company">{{ item.company }}</div>
                <p class="timeline-description">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/variables";

  .experience-section {
    padding: 6rem 0;
    background-color: $bg-secondary;

    @media (max-width: 964px) {
      padding: 4rem 0;
    }
  }

  .experience-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .experience-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;

    @media (max-width: 964px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }

  .experience-text {
    .experience-title {
      font-size: 2.5rem;
      color: $text-primary;
      margin-bottom: 2rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .experience-description {
      margin-bottom: 2rem;

      p {
        color: $text-secondary;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        font-size: 1.1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .portfolio-link {
    .portfolio-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
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

  // Timeline Styles
  .timeline-container {
    position: relative;
  }

  .timeline {
    position: relative;

    // Główna linia timeline
    &::before {
      content: "";
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 40px;
      width: 2px;
      background: linear-gradient(to bottom, $accent, rgba(139, 95, 191, 0.3));
    }
  }

  .timeline-item {
    position: relative;
    padding-left: 4rem;
    margin-bottom: 3rem;

    &--last {
      margin-bottom: 0;
    }

    // Dot na timeline
    .timeline-dot {
      position: absolute;
      left: 10px;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: $accent;
      border: 4px solid $bg-secondary;
      box-shadow: 0 0 0 4px rgba(139, 95, 191, 0.2);
      transition: all 0.3s ease;
    }

    &:hover .timeline-dot {
      transform: scale(1.2);
      box-shadow: 0 0 0 8px rgba(139, 95, 191, 0.3);
    }
  }

  .timeline-content {
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(139, 95, 191, 0.1);
    transition: all 0.3s ease;
    border-left: 4px solid $accent;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(139, 95, 191, 0.2);
    }
  }

  .timeline-date {
    color: $accent;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .timeline-title {
    color: $text-primary;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .timeline-company {
    color: $text-secondary;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .timeline-description {
    color: $text-secondary;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  // Mobile adjustments
  @media (max-width: 964px) {
    .timeline {
      &::before {
        left: 15px;
      }
    }

    .timeline-item {
      padding-left: 3rem;

      .timeline-dot {
        left: 5px;
        width: 16px;
        height: 16px;
      }
    }

    .timeline-content {
      padding: 1.5rem;
    }
  }
</style>
