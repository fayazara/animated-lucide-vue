<template>
  <UContainer class="py-12">
    <div class="mb-12 flex items-start md:items-center gap-4 justify-between">
      <div>
        <h1 class="text-2xl font-bold">Animated Lucide Vue Icons</h1>
        <p class="text-sm text-gray-500 mt-4">
          A collection of animated icons using Lucide and Vue Motion. Ported
          from the awesome lib
          <a
            href="https://icons.pqoqubbw.dev/"
            class="text-primary-500 hover:underline"
            >pqoqubbw/icons</a
          >
          by
          <a
            href="https://x.com/pqoqubbw"
            class="text-primary-500 hover:underline"
            >dmytro</a
          >
        </p>
        <p class="text-sm text-gray-500 mt-4">
          Made by
          <a
            href="https://x.com/fayazara"
            class="text-primary-500 hover:underline"
            >Fayaz</a
          >. and
          <a
            href="https://x.com/Joe_Elia"
            class="text-primary-500 hover:underline"
            >Joe Elia</a
          >. Work in progress, feel free to contribute on GitHub.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <ThemeToggle/>
        <ThemePicker v-model="primaryColor" />
        <UButton
          icon="i-lucide-github"
          variant="ghost"
          target="_blank"
          to="https://github.com/fayazara/animated-lucide-vue"
        />
      </div>
    </div>
    <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideAArrowDown
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSquareArrowDown
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSquareArrowUp
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideHistory
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSquareArrowLeft
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSquareArrowRight
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideEarth
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideAudioLines
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSquareStack
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSlidersHorizontal
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSquareActivity
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideUserRound
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideHome
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideFileStack
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideAlarmClock
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSettings
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideMenu
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideDelete
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideClock
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCalendarDays
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideBluetoothSearching
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSmartphoneCharging
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSearch
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideWaves
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideMoon
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSun
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCircleCheck
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideUsers
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideBell
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideKey
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideKeySquare
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideKeyCircle
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideRotateCW
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideRotateCCW
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideRefreshCWOff
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideRefreshCW
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideRefreshCCWDot
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideRedo
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideUndoDot
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideRedoDot
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigDown
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigLeft
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigRight
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigUp
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideAArrowUp
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideChartSpline
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowUp
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowDown
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideVibrate
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideWavesLadder
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideWindArrowDown
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideAirVent
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideTornado
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCloudRain
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCloudRainWind
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigDownDash
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigLeftDash
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigRightDash
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideArrowBigUpDash
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideMoonAlt
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideFacebook
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideTwitter
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideLinkedin
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideYoutube
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideInstagram
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideTwitch
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideDribbble
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideDiscord
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCloudSun
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSunset
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSunDim
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSunMedium
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSunMoon
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCart
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideStethoscope
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideEarth
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideWorkflow
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideLogout
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCircleHelp
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCheck
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideGithub
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCompass
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideFlame
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideFingerprint
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideFishSymbol
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideEyeOff
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideCopy
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideChevronDown
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideExpand
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideFrame
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideGauge
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideKeyboard
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideLoaderPinwheel
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideLanguages
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideLink
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideSmile
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideTerminal
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideTimer
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideTrendingUp
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideTrendingDown
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideWind
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideUpload
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucideX
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled }">
          <LucidePlay
            :ref="ref"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const primaryColor = ref('text-neutral-700 dark:text-neutral-300');
</script>
