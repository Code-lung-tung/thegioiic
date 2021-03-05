<?php
    use App\model\Type;
    use App\model\ArticleCategory;
    use App\model\Service;
    use App\model\Reply;
    use App\model\Comment;
    use App\model\Information;
    use App\model\InformationCategory;
    use App\model\Banner;
    use App\model\BannerItem;
    use App\model\OnlineSupportInformation;
    use App\model\Setting;
    use App\Enums\BannerType;
    use App\Enums\SettingType;
    use App\model\Product;
    use Illuminate\Support\Facades\URL;

    function getTypes() {
        return Type::all();
    }

    function getArticleCategories() {
        return ArticleCategory::active()->get();
    }

    function getProductLimit($ids) {
        return Product::whereIn('category_id', $ids)->limit(4)->get();
    }

    function getSuggestServices() {
        return Service::active()->orderBy('id', 'DESC')->take(5)->get();
    }

    function getSuggestInformations() {
        return Information::active()->orderBy('id', 'DESC')->take(5)->get();
    }

    function getInformations($types) {
        return Information::active()->where('information_category_id', $types)->orderBy('id', 'DESC')->take(6)->get();
    }

    function getInformationCategory($id) {
        return InformationCategory::whereId($id)->get()->first();
    }

    function getSuggestArticleCategories() {
        return ArticleCategory::active()->with('articles')->orderBy('id', 'ASC')->take(1)->get();
    }

    function getTotalReplies($article) {
        $comment_ids = $article->comments->pluck('id')->toArray();
        $replies = Reply::whereIn('comment_id', $comment_ids)->get();
        return count($comment_ids) + count($replies);
    }

    function firstCharacterOfName($name) {
        return strtoupper(substr($name, 0, 1));
    }

    function statusStr($status) {
        return
        [
            0 => 'Disabled',
            1 => 'Active'
        ][$status];
    }


    function loadImage($image) {
        if ($image) {
            return URL::to('/').'/images/'.$image;
        } else {
            return URL::to('/').'/images/default-image.jpg';
        }
    }

    function settingTypeText($type) {
        return
        [   
            0 => 'Số điện thoại',
            1 => 'Giờ mở cửa',
            2 => 'Địa chỉ',
            3 => 'Hỗ trợ trực tuyến kinh doanh',
            4 => 'Hỗ trợ trực tuyến kĩ thuật',
            5 => 'Hỗ trợ trực tuyến bán hàng - bảo hành',
            6 => 'Tiêu đề trang',
            7 => 'Trợ giúp'
        ][$type];
    }

    function bannerTypeText($type) {
        return
        [
            0 => 'Logo',
            1 => 'Trên cùng bên phải',
            2 => 'Trên cùng bên trái',
            3 => 'Bên trái ngoài cùng',
            4 => 'Bên phải ngoài cùng',
            5 => 'Bên trái',
            6 => 'Bên phải',
            7 => 'Slider'
        ][$type];
    }

    function getNewestComments() {
        return Comment::with('user')->where('commentable_type', 'App\model\Product')->orderBy('id', 'DESC')->take(10)->get();
    }

    function getBanner($type) {
        if ($type == BannerType::Slider)
        {
            $slider = Banner::active()->where('type', $type)->first();
            return BannerItem::active()->where('banner_id', $slider->id)->get();
        }
        return Banner::active()->where('type', $type)->first();
    }

    function getSetting($type) {
        return Setting::where('type', $type)->first();
    }

    function getOnlineSupportSetting() {
        return Setting::with('onlineSupportInformations')->whereIn('type', onlineSupportSettingTypes())->get();
    }

    function onlineSupportSettingTypes() {
        return [SettingType::OnlineSupportBusiness, SettingType::OnlineSupportTechnical, SettingType::OnlineSupportSaleWarranty];
    }

    function getProductImageUrl($id) {
        $product = Product::findOrFail($id);
        if ($product->image_type == 1)
        {
            return $product->image;
        }
        else
        {
            if ($product->image) {
                return URL::to('/').'/images/'.$product->image;
            } else {
                return URL::to('/').'/images/default-image.jpg';
            }
        }
    }
    function clean_str($string) {
        $result = str_replace(array("\r", "\n", "\t", "\a"), '', $string);
		
        return $result;
     }

     function unit_product($str) {
        if ($str) {
            return $str;
        } else {
            return 'Cái';
        }
     }

     function total_money_of_products($products) {
         $total = 0;
         foreach($products as $item) {
            $total += ($item->pivot->quantity)*($item->pivot->price);
         }
         return number_format($total);
     }
