<template>
    <FlexColumn ref="self" gap="0">
        <BlockContainer>
            <FlexRow>
                <FlexColumn gap="0">
                    <FlexColumn gap="1rem">
                        <TextLabel name="Output<br>Probabilities" ref="OutputProbabilities" />
                        <NormalModule v-same-width="'Output Probabilities'" ref="Softmax" name="Softmax" />
                        <NormalModule v-same-width="'Output Probabilities'" ref="Linear" name="Linear" />
                    </FlexColumn>
                    <GapSpace height=".5rem" />
                </FlexColumn>
                <GapSpace width="1.3em" />
            </FlexRow>
        </BlockContainer>

        <TextLabel :style="{
            position: 'absolute',
            transform: 'translate(116px, 349px)',
        }" name="\times N" math />
        <TextLabel :style="{
            position: 'absolute',
            transform: 'translate(114px, 570px)'
        }" name="Positional<br>Encoding" />

        <LayerBlock>
            <FlexRow>
                <FlexColumn gap=".5rem">
                    <NormalModule v-same-width="'Output Probabilities'" ref="AddAndNorm3" name="Add & Norm" />
                    <NormalModule ref="FeedForward" name="Feed Forward" />
                    <GapSpace />
                    <NormalModule ref="AddAndNorm2" name="Add & Norm" />
                    <NormalModule ref="MultiHeadAttention" name="Multi-Head<br>Attention" />
                    <GapSpace />
                    <NormalModule ref="AddAndNorm1" name="Add & Norm" />
                    <NormalModule ref="MaskedMultiHeadAttention" name="Masked<br>Multi-Head<br>Attention" />
                    <GapSpace height="2em" />
                </FlexColumn>
                <GapSpace width="1.3em" />
            </FlexRow>
        </LayerBlock>
        <BlockContainer>
            <FlexRow>
                <FlexColumn gap=".5rem">
                    <PositionalEncoding ref="PositionalEncode"
                        style="margin: auto; width: auto; transform: rotate(180deg)" />
                    <NormalModule ref="InputEmbedding" name="Input Embedding" />
                    <GapSpace />
                    <TextLabel ref="InputText" name="Outputs<br>(shifted right)" />
                </FlexColumn>
                <GapSpace width="1.3em" />
            </FlexRow>
        </BlockContainer>
    </FlexColumn>

    <svg ref="svg" class="mask"></svg>
</template>

<script setup lang="ts">
import NormalModule from "@/components/modules/NormalModule.vue";
import PositionalEncoding from "@/components/modules/PositionalEncoding.vue";
import LayerBlock from "@/components/modules/Block.vue";
import GapSpace from "@/components/comp/GapSpace.vue";
import FlexColumn from "@/components/comp/FlexColumn.vue";
import FlexRow from "@/components/comp/FlexRow.vue";
import BlockContainer from "@/components/comp/BlockContainer.vue";

import DrawArrow from "@/components/comp/DrawArrow";
import { ref, watchEffect } from "vue";
import { KeyPoints2Dictionary } from "@/components/modules/getModulePosition";
import noError from "@/utils/noError";
import TextLabel from "@/components/modules/Text.vue";
import listAdd from "@/utils/listAdd";

import vSameWidth from "@/components/directives/vSameWidth";
import svgResize from "@/utils/resizeSvg";

const self = ref<any>();

const FeedForward = ref<any>();
const MaskedMultiHeadAttention = ref<any>();
const MultiHeadAttention = ref<any>();
const PositionalEncode = ref<any>();
const InputEmbedding = ref<any>();
const AddAndNorm1 = ref<any>();
const AddAndNorm2 = ref<any>();
const AddAndNorm3 = ref<any>();
const InputText = ref<any>();

const OutputProbabilities = ref<any>();
const Softmax = ref<any>();
const Linear = ref<any>();

const svg = ref<any>();

watchEffect(noError(() => {
    svgResize(svg, self);

    DrawArrow(
        svg.value,
        KeyPoints2Dictionary(InputText.value?.keypoints).top,
        KeyPoints2Dictionary(InputEmbedding.value?.keypoints).bottom,
        "direct"
    );

    DrawArrow(
        svg.value,
        KeyPoints2Dictionary(InputEmbedding.value?.keypoints).top,
        KeyPoints2Dictionary(PositionalEncode.value?.keypoints).bottom,
        "direct"
    );

    DrawArrow(
        svg.value,
        KeyPoints2Dictionary(PositionalEncode.value?.keypoints).top,
        KeyPoints2Dictionary(MaskedMultiHeadAttention.value?.keypoints).bottom,
        "direct"
    );

    DrawArrow(
        svg.value,
        KeyPoints2Dictionary(MultiHeadAttention.value?.keypoints).top,
        KeyPoints2Dictionary(FeedForward.value?.keypoints).bottom,
        "direct"
    );

    const MHAKeyPoints = KeyPoints2Dictionary(MaskedMultiHeadAttention.value?.keypoints ?? []);

    DrawArrow(
        svg.value,
        [MHAKeyPoints.bottom[0], MHAKeyPoints.bottom[1] + 20],
        [MHAKeyPoints.bottom[0] + 40, MHAKeyPoints.bottom[1]],
        [], undefined, undefined, false
    );

    DrawArrow(
        svg.value,
        [MHAKeyPoints.bottom[0], MHAKeyPoints.bottom[1] + 20],
        [MHAKeyPoints.bottom[0] - 40, MHAKeyPoints.bottom[1]],
        [], undefined, undefined, false
    );

    DrawArrow(
        svg.value,
        [MHAKeyPoints.bottom[0], MHAKeyPoints.bottom[1] + 35],
        KeyPoints2Dictionary(AddAndNorm1.value?.keypoints).right,
        [[90, 0]], undefined, undefined, true
    );

    DrawArrow(
        svg.value,
        MHAKeyPoints.top,
        listAdd(KeyPoints2Dictionary(MultiHeadAttention.value?.keypoints).bottom, [40, 0]),
        [[0, -55]], undefined, undefined, false
    );

    const FeedForwardBottom = KeyPoints2Dictionary(FeedForward.value?.keypoints).bottom;

    DrawArrow(
        svg.value,
        [FeedForwardBottom[0], FeedForwardBottom[1] + 18],
        KeyPoints2Dictionary(AddAndNorm3.value?.keypoints).right,
        [[90, 0]], undefined, undefined, true
    );

    DrawArrow(
        svg.value,
        KeyPoints2Dictionary(FeedForward.value?.keypoints).top,
        KeyPoints2Dictionary(Linear.value?.keypoints).bottom,
        "direct"
    );

    DrawArrow(
        svg.value,
        KeyPoints2Dictionary(Linear.value?.keypoints).top,
        KeyPoints2Dictionary(Softmax.value?.keypoints).bottom,
        "direct"
    );

    DrawArrow(
        svg.value,
        KeyPoints2Dictionary(Softmax.value?.keypoints).top,
        KeyPoints2Dictionary(OutputProbabilities.value?.keypoints).bottom,
        "direct"
    );
}));

defineExpose({
    MultiHeadAttention,
});
</script>

<style scoped></style>