<template>
    <div>
        <button @click="$emit('updateChart', 'line')">Line chart</button>
        <button @click="$emit('updateChart', 'bar')">Bar chart</button>
        <button @click="$emit('updateChart', 'doughnut')">Doughnut chart</button>
        <button @click="$emit('updateChart', 'pie')">Pie chart</button>
        <button @click="$emit('updateChart', 'polar')">PolarArea Chart</button>
    </div>
</template>