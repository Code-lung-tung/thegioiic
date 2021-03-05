<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class BannerType extends Enum
{
    const Logo      =   0;
    const TopRight  =   1;
    const TopLeft   =   2;
    const LeftMost  =   3;
    const RightMost =   4;
    const Left      =   5;
    const Right     =   6;
    const Slider    =   7;
}
