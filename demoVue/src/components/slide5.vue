<template>
    <div>
        <Home></Home>
        <h1>1. Data Biding</h1>
        <h3>One-way</h3>
        <OneWayDataBiding></OneWayDataBiding><br>
        <ParentComponent></ParentComponent><br>

        <h3>Two-way</h3>
        <DataBinding></DataBinding><br>

        <h1>2. Reactivity</h1>
        <h2>ref</h2>
        <ref></ref>

        <h2>reactive</h2>
        <Reactivity></Reactivity>

        <h3>Nested Reactivity</h3>
        <NestedReactivity></NestedReactivity>

        <h3>Reactive Arrays</h3>
        <ReactiveArrays></ReactiveArrays>

        <h3>Reactive với các thao tác trực tiếp trên Object/Array</h3>
        <ReactiveObject></ReactiveObject>

        <h2>Class Binding</h2>
        <ClassesBinding></ClassesBinding><br>
        <ClassBindingObject></ClassBindingObject><br>
        <ClassBindingArray></ClassBindingArray><br>

        <h2>Style Binding</h2>
        <BindingInlineStyles></BindingInlineStyles><br>
        <StyleBindingObject></StyleBindingObject><br>
        <StyleBindingArray></StyleBindingArray>

    </div>
</template>

<script setup>
import DataBinding from "./slide5/DataBinding.vue"
import OneWayDataBiding from "./slide5/OneWayDataBiding.vue"
import ref from "./slide5/ref.vue"
import Reactivity from "./slide5/Reactivity.vue"
import ParentComponent from "./slide5/ParentComponent.vue"
import NestedReactivity from "./slide5/NestedReactivity.vue"
import ReactiveArrays from "./slide5/ReactiveArrays.vue"
import ReactiveObject from "./slide5/ReactiveObject.vue"
import ClassesBinding from "./slide5/ClassesBinding.vue"
import ClassBindingObject from "./slide5/ClassBindingObject.vue"
import ClassBindingArray from "./slide5/ClassBindingArray.vue"
import BindingInlineStyles from "./slide5/BindingInlineStyles.vue"
import StyleBindingObject from "./slide5/StyleBindingObject.vue"
import StyleBindingArray from "./slide5/StyleBindingArray.vue"
import Home from "./Home.vue"
</script>

<style scoped></style>