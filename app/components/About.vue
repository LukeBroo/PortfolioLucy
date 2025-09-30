<script setup lang="ts">
  const {t} = useI18n();

  const skills = computed(() => {
    const tmData = $tm("about.skills");

    if (Array.isArray(tmData)) {
      // Wyciągnij tekst z każdego obiektu
      const extractedSkills = tmData.map((item) => {
        // Sprawdź różne możliwe właściwości
        if (item.static) {
          return item.static;
        } else if (item.body && item.body.static) {
          return item.body.static;
        } else if (typeof item === "string") {
          return item;
        }
        return item;
      });

      return extractedSkills;
    }

    return [];
  });
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-content">
        <!-- Zdjęcie -->
        <div class="about-image">
          <NuxtImg
            src="/lucy.jpg"
            alt="Lucy - Copywriter & Graphic Designer"
            class="profile-img"
            loading="lazy" />
        </div>

        <!-- Opis -->
        <div class="about-text">
          <h2 class="about-title">{{ $t("about.title") }}</h2>
          <h3 class="about-subtitle">
            <strong>{{ $t("about.subtitle") }}</strong>
          </h3>

          <div class="about-description">
            <p>{{ $t("about.description1") }}</p>
            <p>{{ $t("about.description2") }}</p>
            <p>{{ $t("about.description3") }}</p>
          </div>

          <!-- Umiejętności/Tags -->
          <div class="skills-tags">
            <span class="skill-tag" v-for="skill in skills" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/variables";

  .about-section {
    padding: 6rem 0;
    background: linear-gradient(0deg, $bg-primary 0%, $bg-secondary 100%);

    @media (max-width: 964px) {
      padding: 3rem 0;
    }
  }

  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 964px) {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
  }

  .about-image {
    .profile-img {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(139, 95, 191, 0.2);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }

      @media (max-width: 964px) {
        max-width: 250px;
      }
    }
  }

  .about-text {
    .about-title {
      letter-spacing: 4px;
      font-size: 2.5rem;
      color: $text-primary;
      margin-bottom: 0.5rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .about-subtitle {
      font-size: 1.2rem;
      color: $accent;
      margin-bottom: 2rem;
      font-weight: 500;
      letter-spacing: 3px;
    }

    .about-description {
      margin-bottom: 2rem;

      p {
        color: $text-secondary;
        line-height: 1.8;
        margin-bottom: 1rem;
        font-size: 1.1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 2.5rem;

    .skill-tag {
      background-color: rgba(255, 255, 255, 1);
      color: $accent;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(139, 95, 191, 0.2);
      transition: all 0.3s ease;
      cursor: crosshair;

      &:hover {
        background-color: $accent;
        color: white;
        transform: translateY(-2px);
      }
    }
  }
</style>
