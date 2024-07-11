<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { PTextarea } from '@/shared/ui/PTextarea'
import { PButton } from '@/shared/ui/PButton'

import { EXAMPLE_VALUE } from './config'
import { type Grid, calculateGridMinPathSum, isGrid } from './domain'

// Grid input & parsing
const gridInput = ref(EXAMPLE_VALUE)

const parsedGrid = ref<Grid | null>(null)
const isParseFailed = ref(false)

function parseGrid() {
  let result: Grid | null = null

  try {
    result = JSON.parse(gridInput.value)
    if (!isGrid(result)) {
      isParseFailed.value = true
      return
    }

    parsedGrid.value = result

    isParseFailed.value = false
  }
  catch (e) {
    isParseFailed.value = true
  }
}

const gridMinPathSum = ref<number | null>(null)

onMounted(parseGrid)

// Calculate minimum path sum
function calculateMinPathSum() {
  if (!parsedGrid.value)
    return

  gridMinPathSum.value = calculateGridMinPathSum(parsedGrid.value)
}

onMounted(calculateMinPathSum)
</script>

<template>
  <div class="max-w-md w-full p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <PTextarea v-model="gridInput" class="mb-2" />

      <p
        v-if="isParseFailed"
        class="text-red-500"
        :disabled="!gridInput.length"
      >
        Please provide correct grid
      </p>
    </div>

    <PButton class="mb-4 block" @click="parseGrid">
      Update Grid
    </PButton>

    <table
      v-if="!(!parsedGrid || isParseFailed)"
      class="w-full table-fixed border-collapse border border-gray-200 mb-4"
    >
      <tbody>
        <!-- eslint-disable vue/require-v-for-key -->
        <tr v-for="row, in parsedGrid" class="border">
          <td v-for="cell in row" class="border p-2">
            {{ cell }}
          </td>
        </tr>
        <!-- eslint-enable vue/require-v-for-key -->
      </tbody>
    </table>

    <PButton
      class="mb-4 block" :disabled="!parseGrid"
      @click="calculateMinPathSum"
    >
      Calculate Minimum Cost
    </PButton>

    <p class="font-bold text-lg">
      Minimum Cost: {{ gridMinPathSum }}
    </p>
  </div>
</template>
