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
              <!-- Marker z ikoną -->
              <div class="timeline-marker" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="7"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                    fill="none" />
                  <path
                    d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                    fill="none" />
                </svg>
              </div>
              <!-- Treść -->
              <div class="timeline-content">
                <div class="timeline-date">{{ item.date }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <div class="timeline-company">{{ item.company }}</div>
                <p class="timeline-description">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- /Timeline -->
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

  /* Timeline Styles — wariant 3 */
  .timeline {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 19px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(
        to bottom,
        lighten($accent, 10%),
        lighten($accent, 35%)
      );
    }
  }
  .timeline-item {
    position: relative;
    padding-left: 74px;
    margin-bottom: 2.6rem;
    &--last {
      margin-bottom: 0;
    }
  }
  .timeline-marker {
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: $accent;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    border: 3px solid $bg-secondary;
    box-shadow: 0 0 0 4px rgba(139, 95, 191, 0.18);
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    svg {
      width: 22px;
      height: 22px;
      stroke: white;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
  .timeline-item:hover .timeline-marker {
    transform: scale(1.08);
    box-shadow: 0 0 0 6px rgba(139, 95, 191, 0.24);
  }
  .timeline-content {
    position: relative;
    background-color: white;
    padding: 1.5rem;
    border-radius: $border-radius;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);
    transition: all 0.25s ease;

    /* Strzałka łącząca kartę z osią */
    &::before {
      content: "";
      position: absolute;
      top: 14px;
      left: -8px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px 8px 8px 0;
      border-color: transparent white transparent transparent;
    }

    &:hover {
      transform: translateX(4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.09);
    }
  }
  .timeline-date {
    color: $accent;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.4px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .timeline-title {
    color: $text-primary;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .timeline-company {
    color: $text-secondary;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 500;
    opacity: 0.9;
  }
  .timeline-description {
    color: $text-secondary;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  /* Mobile */
  @media (max-width: 964px) {
    .timeline::before {
      left: 16px;
    }
    .timeline-item {
      padding-left: 58px;
      margin-bottom: 2rem;
    }
    .timeline-marker {
      width: 34px;
      height: 34px;
      svg {
        width: 18px;
        height: 18px;
      }
    }
    .timeline-content {
      padding: 1.25rem;
      &::before {
        top: 10px;
        left: -7px;
        border-width: 7px 7px 7px 0;
      }
    }
  }
</style>
