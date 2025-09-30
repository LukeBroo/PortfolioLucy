<script setup>
  const {locale} = useI18n();

  // Link do certyfikatu (umieść PDF w /public/certificates/)
  const certificateLink = "/certificates/certificate_lucy.pdf";

  // Timeline data dla różnych języków
  const timelineData = {
    pl: [
      {
        date: "2023.05 – obecnie",
        title: "Content Specialist & Copywriter",
        company: "Agencja Marketingowa bRenewal",
        description:
          "Tworzenie treści marketingowych i wizerunkowych, wsparcie komunikacji kryzysowej, grafiki na LinkedIn/posty na Instagram.",
        type: "job",
      },
      {
        date: "2023.01 – 2023.03",
        title: "Copywriter",
        company: "Agencja Marketingowa Invette",
        description:
          "Zdobywanie pierwszych praktycznych umiejętności – pisanie tekstów blogowych SEO i zarządzanie wizytówkami Google.",
        type: "job",
      },
      {
        date: "2022",
        title: "Certyfikat",
        company: "Google & SGH – Umiejętności Jutra",
        description:
          "8-tygodniowy kurs marketingu internetowego, który pozwolił rozwinąć wiedzę i kompetencje w nowoczesnym marketingu cyfrowym.",
        type: "certificate",
        certificateUrl: certificateLink,
      },
    ],
    en: [
      {
        date: "2023.05 – present",
        title: "Content Specialist & Copywriter",
        company: "Marketing Agency bRenewal",
        description:
          "Creating marketing and image content, supporting crisis communication, graphics for LinkedIn/Instagram posts.",
        type: "job",
      },
      {
        date: "2023.01 – 2023.03",
        title: "Copywriter",
        company: "Marketing Agency Invette",
        description:
          "Gaining first practical skills – writing SEO blog articles and managing Google My Business profiles.",
        type: "job",
      },
      {
        date: "2022",
        title: "Certificate",
        company: "Google & SGH – Future Skills",
        description:
          "8-week internet marketing course that allowed developing knowledge and competencies in modern digital marketing.",
        type: "certificate",
        certificateUrl: certificateLink,
      },
    ],
  };

  const timelineItems = computed(() => {
    return timelineData[locale.value] || timelineData.pl;
  });
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
                <Icon
                  :name="
                    item.type === 'certificate'
                      ? 'heroicons:academic-cap'
                      : 'heroicons:briefcase'
                  "
                  size="22" />
              </div>
              <!-- Treść -->
              <div class="timeline-content">
                <!-- Ikonka oka dla certyfikatu -->
                <a
                  v-if="item.type === 'certificate' && item.certificateUrl"
                  :href="item.certificateUrl"
                  target="_blank"
                  rel="noopener"
                  class="certificate-view"
                  :title="$t('experience.viewCertificate')">
                  <Icon name="heroicons:document-text" size="20" />
                </a>

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
    background: linear-gradient(0deg, $bg-primary 0%, $bg-secondary 100%);
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

  /* Timeline Styles */
  .timeline {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 20px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: $accent;
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

    .icon {
      color: white;
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

  // Ikonka oka dla certyfikatu
  .certificate-view {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    background-color: rgba(139, 95, 191, 0.1);
    color: $accent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;

    &:hover {
      background-color: $accent;
      color: white;
      transform: scale(1.1);
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
    .certificate-view {
      width: 32px;
      height: 32px;
      top: 0.8rem;
      right: 0.8rem;
    }
  }
</style>
