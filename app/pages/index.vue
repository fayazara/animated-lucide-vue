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
        <ThemeToggle />
        <ThemePicker v-model="primaryColor" />
        <UButton
          icon="i-lucide-github"
          variant="ghost"
          target="_blank"
          to="https://github.com/fayazara/animated-lucide-vue"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4"
    >
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideAArrowDown
            :ref="ref"
            :compname="compname('AArrowDown')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSquareArrowDown
            :ref="ref"
            :compname="compname('SquareArrowDown')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSquareArrowUp
            :ref="ref"
            :compname="compname('SquareArrowUp')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideHistory
            :ref="ref"
            :compname="compname('History')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSquareArrowLeft
            :ref="ref"
            :compname="compname('SquareArrowLeft')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSquareArrowRight
            :ref="ref"
            :compname="compname('SquareArrowRight')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideEarth
            :ref="ref"
            :compname="compname('Earth')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideAudioLines
            :ref="ref"
            :compname="compname('AudioLines')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSquareStack
            :ref="ref"
            :compname="compname('SquareStack')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSlidersHorizontal
            :ref="ref"
            :compname="compname('SliderHorizontal')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSquareActivity
            :ref="ref"
            :compname="compname('SquareActivity')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideUserRound
            :ref="ref"
            :compname="compname('UserRound')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideHome
            :ref="ref"
            :compname="compname('Home')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideFileStack
            :ref="ref"
            :compname="compname('FileStack')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideAlarmClock
            :ref="ref"
            :compname="compname('AlarmClock')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSettings
            :ref="ref"
            :compname="compname('Settings')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideMenu
            :ref="ref"
            :compname="compname('Menu')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideDelete
            :ref="ref"
            :compname="compname('Delete')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideClock
            :ref="ref"
            :compname="compname('Clock')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideCalendarDays
            :ref="ref"
            :compname="compname('CalendarDays')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideBluetoothSearching
            :ref="ref"
            :compname="compname('BluetoothSearching')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSmartphoneCharging
            :ref="ref"
            :compname="compname('SmartphoneCharging')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSearch
            :ref="ref"
            :compname="compname('Search')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideWaves
            :ref="ref"
            :compname="compname('Waves')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideMoon
            :ref="ref"
            :compname="compname('Moon')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSun
            :ref="ref"
            :compname="compname('Sun')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideCircleCheck
            :ref="ref"
            :compname="compname('CircleCheck')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideUsers
            :ref="ref"
            :compname="compname('Users')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideBell
            :ref="ref"
            :compname="compname('Bell')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideKey
            :ref="ref"
            :compname="compname('Key')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideKeySquare
            :ref="ref"
            :compname="compname('KeySquare')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideKeyCircle
            :ref="ref"
            :compname="compname('KeyCircle')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideRotateCW
            :ref="ref"
            :compname="compname('RotateCW')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideRotateCCW
            :ref="ref"
            :compname="compname('RotateCCW')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideRefreshCWOff
            :ref="ref"
            :compname="compname('RefreshCWOff')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideRefreshCW
            :ref="ref"
            :compname="compname('RefreshCW')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideRefreshCCWDot
            :ref="ref"
            :compname="compname('RefreshCCWDot')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideRedo
            :ref="ref"
            :compname="compname('Redo')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideUndoDot
            :ref="ref"
            :compname="compname('UndoDot')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideRedoDot
            :ref="ref"
            :compname="compname('RedoDot')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigDown
            :ref="ref"
            :compname="compname('ArrowBigDown')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigLeft
            :ref="ref"
            :compname="compname('ArrowBigLeft')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigRight
            :ref="ref"
            :compname="compname('ArrowBigRight')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigUp
            :ref="ref"
            :compname="compname('ArrowBigUp')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideAArrowUp
            :ref="ref"
            :compname="compname('AArrowUp')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideChartSpline
            :ref="ref"
            :compname="compname('ChartSpline')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowUp
            :ref="ref"
            :compname="compname('ArrowUp')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowDown
            :ref="ref"
            :compname="compname('ArrowDown')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideVibrate
            :ref="ref"
            :compname="compname('Vibrate')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideWavesLadder
            :ref="ref"
            :compname="compname('WavesLadder')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideWindArrowDown
            :ref="ref"
            :compname="compname('WindArrowDown')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideAirVent
            :ref="ref"
            :compname="compname('AirVent')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideTornado
            :ref="ref"
            :compname="compname('Tornado')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideCloudRain
            :ref="ref"
            :compname="compname('CloudRain')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideCloudRainWind
            :ref="ref"
            :compname="compname('CloudRainWind')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigDownDash
            :ref="ref"
            :compname="compname('ArrowBigDownDash')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigLeftDash
            :ref="ref"
            :compname="compname('ArrowBigLeftDash')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigRightDash
            :ref="ref"
            :compname="compname('ArrowBigRightDash')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideArrowBigUpDash
            :ref="ref"
            :compname="compname('ArrowBigUpDash')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideMoonAlt
            :ref="ref"
            :compname="compname('MoonAlt')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideFacebook
            :ref="ref"
            :compname="compname('Facebook')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideTwitter
            :ref="ref"
            :compname="compname('Twitter')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideLinkedin
            :ref="ref"
            :compname="compname('Linkedin')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideYoutube
            :ref="ref"
            :compname="compname('Youtube')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideInstagram
            :ref="ref"
            :compname="compname('Instagram')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideTwitch
            :ref="ref"
            :compname="compname('Twitch')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideDribbble
            :ref="ref"
            :compname="compname('Dribble')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideDiscord
            :ref="ref"
            :compname="compname('Discord')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideCloudSun
            :ref="ref"
            :compname="compname('CloudSun')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSunset
            :ref="ref"
            :compname="compname('Sunset')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSunDim
            :ref="ref"
            :compname="compname('SunDim')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSunMedium
            :ref="ref"
            :compname="compname('SunMedium')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideSunMoon
            :ref="ref"
            :compname="compname('SunMoon')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideCart
            :ref="ref"
            :compname="compname('Cart')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideStethoscope
            :ref="ref"
            :compname="compname('Stethoscope')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideEarth
            :ref="ref"
            :compname="compname('Earth')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideWorkflow
            :ref="ref"
            :compname="compname('Workflow')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideLogout
            :ref="ref"
            :compname="compname('Logout')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
      <AnimatedIconButton>
        <template #default="{ ref, controlled, compname }">
          <LucideCircleHelp
            :ref="ref"
            :compname="compname('CircleHelp')"
            :controlled="controlled"
            :class="primaryColor"
          />
        </template>
      </AnimatedIconButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const primaryColor = ref("text-neutral-700 dark:text-neutral-300");
</script>
