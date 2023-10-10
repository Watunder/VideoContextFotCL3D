import aaf_video_scale from "./aaf_video_scale/aaf_video_scale.js";
import crossfade from "./crossfade/crossfade.js";
import horizontalWipe from "./horizontalWipe/horizontalWipe.js";
import verticalWipe from "./verticalWipe/verticalWipe.js";
import randomDissolve from "./randomDissolve/randomDissolve.js";
import toColorAndBackFade from "./toColorAndBackFade/toColorAndBackFade.js";
import starWipe from "./starWipe/starWipe.js";
import combine from "./combine/combine.js";
import colorThreshold from "./colorThreshold/colorThreshold.js";
import monochrome from "./monochrome/monochrome.js";
import horizontalBlur from "./horizontalBlur/horizontalBlur.js";
import verticalBlur from "./verticalBlur/verticalBlur.js";
import aaf_video_flop from "./aaf_video_flop/aaf_video_flop.js";
import aaf_video_flip from "./aaf_video_flip/aaf_video_flip.js";
import aaf_video_position from "./aaf_video_position/aaf_video_position.js";
import aaf_video_crop from "./aaf_video_crop/aaf_video_crop.js";
import staticDissolve from "./staticDissolve/staticDissolve.js";
import staticEffect from "./staticEffect/staticEffect.js";
import dreamfade from "./dreamfade/dreamfade.js";
import opacity from "./opacity/opacity.js";
import crop from "./crop/crop.js";

let DEFINITIONS = {
    AAF_VIDEO_SCALE: aaf_video_scale,
    CROSSFADE: crossfade,
    DREAMFADE: dreamfade,
    HORIZONTAL_WIPE: horizontalWipe,
    VERTICAL_WIPE: verticalWipe,
    RANDOM_DISSOLVE: randomDissolve,
    STATIC_DISSOLVE: staticDissolve,
    STATIC_EFFECT: staticEffect,
    TO_COLOR_AND_BACK: toColorAndBackFade,
    STAR_WIPE: starWipe,
    COMBINE: combine,
    COLORTHRESHOLD: colorThreshold,
    MONOCHROME: monochrome,
    HORIZONTAL_BLUR: horizontalBlur,
    VERTICAL_BLUR: verticalBlur,
    AAF_VIDEO_CROP: aaf_video_crop,
    AAF_VIDEO_POSITION: aaf_video_position,
    AAF_VIDEO_FLIP: aaf_video_flip,
    AAF_VIDEO_FLOP: aaf_video_flop,
    OPACITY: opacity,
    CROP: crop
};

export { DEFINITIONS };
