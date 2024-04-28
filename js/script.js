'use strict'

class BoxShadowGenerator {
    constructor(
        horizontal,
        horizontalRef, 
        vertical, 
        verticalRef,
        blur,
        blurRef,
        sread,
        sreadRef,
        previewBox,
        rule,
        webkitRule,
        mozRule
    ){
        this.horizontal = horizontal
        this.horizontalRef = horizontalRef
        this.vertical = vertical
        this.verticalRef = verticalRef
        this.blur = blur
        this.blurRef = blurRef
        this.sread = sread
        this.sreadRef = sreadRef
        this.previewBox = previewBox
        this.rule = rule
        this.webkitRule = webkitRule
        this.mozRule = mozRule
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value
        this.verticalRef.value = this.vertical.value
        this.blurRef.value = this.blur.value
        this.sreadRef.value = this.sread.value

        this.applyRule()
        this.showRule()
    }

    applyRule() {
        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.sreadRef.value}px  #000`
        this.currentRule = this.previewBox.style.boxShadow
    }

    showRule() {
        this.rule.innerText = this.currentRule 
        this.webkitRule.innerText = this.currentRule 
        this.mozRule.innerText = this.currentRule 
    }
}

// Seleção de elementos 
const horizontal = document.querySelector('#horizontal')
const horizontalRef = document.querySelector('#horizontal-value')

const vertical = document.querySelector('#vertical')
const verticalRef = document.querySelector('#vertical-value')

const blur = document.querySelector('#blur')
const blurRef = document.querySelector('#blur-value')

const sread = document.querySelector('#spread')
const sreadRef = document.querySelector('#spread-value')

const previewBox = document.querySelector('#box')

const rule = document.querySelector('#rules span')
const webkitRule = document.querySelector('#webkit-rules span')
const mozRule = document.querySelector('#moz-rules span')

const boxShadow  = new BoxShadowGenerator(
    horizontal,
    horizontalRef, 
    vertical, 
    verticalRef,
    blur,
    blurRef,
    sread,
    sreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
)

boxShadow.initialize()

// Eventos
