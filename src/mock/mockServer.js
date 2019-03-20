

import Mock from 'mockjs'
import data from './data.json'

Mock.mock(RegExp('http://localhost:4000/position' + ".*"),
{
  "code": 0,
  "data": {
    "address": "北京市昌平区337省道",
    "city": "北京市",
    "geohash": "40.10038,116.36867",
    "latitude": "40.10038",
    "longitude": "116.36867",
    "name": "昌平区(mock)北七家宏福科技园(337省道北)"
  }
}
  )

Mock.mock('http://localhost:4000/index_category',
{
    "code": 0,
    "data": [
        {
          "id": 20,
          "is_in_serving": true,
          "description": "苦了累了，来点甜的",
          "title": "甜(mock)品",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 10,
          "is_in_serving": true,
          "description": "足不出户，便利回家",
          "title": "商超便利",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5546%5Cu8d85%5Cu4fbf%5Cu5229%22%2C%22complex_category_ids%22%3A%5B254%2C255%2C256%2C257%2C258%2C271%2C272%2C273%2C274%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A252%2C%22name%22%3A%22%5Cu5546%5Cu5e97%5Cu8d85%5Cu5e02%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%95%86%E8%B6%85%E4%BE%BF%E5%88%A9&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 15,
          "is_in_serving": true,
          "description": "附近美食一网打尽",
          "title": "美食",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu7f8e%5Cu98df%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C260%5D%2C%22is_show_all_category%22%3Afalse%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%BE%8E%E9%A3%9F&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 225,
          "is_in_serving": true,
          "description": "有菜有肉，营养均衡",
          "title": "简餐",
          "link": "eleme://restaurants?filter_key=%7B%22activity_types%22%3A%5B3%5D%2C%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu7b80%5Cu9910%22%2C%22complex_category_ids%22%3A%5B209%2C212%2C215%2C265%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%7B%22id%22%3A3%2C%22name%22%3A%22%5Cu4e0b%5Cu5355%5Cu7acb%5Cu51cf%22%2C%22icon_name%22%3A%22%5Cu51cf%22%2C%22icon_color%22%3A%22f07373%22%2C%22is_need_filling%22%3A1%2C%22is_multi_choice%22%3A0%2C%22filter_value%22%3A3%2C%22filter_key%22%3A%22activity_types%22%7D%5D%7D&target_name=%E7%AE%80%E9%A4%90&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 403297,
          "is_in_serving": true,
          "description": "大胆尝鲜，遇见惊喜",
          "title": "新店特惠",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu65b0%5Cu5e97%5Cu7279%5Cu60e0%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C239%2C244%2C248%2C252%2C260%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22support_ids%22%3A%5B-1%5D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%96%B0%E5%BA%97%E7%89%B9%E6%83%A0&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 92,
          "is_in_serving": true,
          "description": "准时必达，超时赔付",
          "title": "准时达",
          "link": "eleme://restaurants?filter_key=%7B%22support_ids%22%3A%5B9%5D%2C%22activities%22%3A%5B%7B%22id%22%3A9%2C%22name%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%2C%22icon_name%22%3A%22%5Cu51c6%22%2C%22icon_color%22%3A%22E8842D%22%2C%22is_need_filling%22%3A0%2C%22is_multi_choice%22%3A1%2C%22filter_value%22%3A9%2C%22filter_key%22%3A%22support_ids%22%2C%22description%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%7D%5D%7D&target_name=%E5%87%86%E6%97%B6%E8%BE%BE&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 1,
          "is_in_serving": true,
          "description": "0元早餐0起送，每天都有新花样。",
          "title": "预订早餐",
          "link": "eleme://web?url=https%3A%2F%2Fzaocan.ele.me&target_name=%E9%A2%84%E8%AE%A2%E6%97%A9%E9%A4%90&animation_type=1&is_need_mark=&banner_type=",
          "image_url": "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 65,
          "is_in_serving": true,
          "description": "",
          "title": "土豪推荐",
          "link": "eleme://restaurants?filter_key=%7B%22activities%22%3A%5B%7B%22filter_key%22%3A%22tags%22%2C%22filter_value%22%3A0%7D%5D%7D&target_name=%E5%9C%9F%E8%B1%AA%E6%8E%A8%E8%8D%90&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 288,
          "is_in_serving": true,
          "description": "无辣不欢",
          "title": "川湘菜",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5ddd%5Cu6e58%5Cu83dc%22%2C%22complex_category_ids%22%3A%5B221%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A220%2C%22name%22%3A%22%5Cu7279%5Cu8272%5Cu83dc%5Cu7cfb%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%B7%9D%E6%B9%98%E8%8F%9C&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 286,
          "is_in_serving": true,
          "description": "",
          "title": "麻辣烫",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu9ebb%5Cu8fa3%5Cu70eb%22%2C%22complex_category_ids%22%3A%5B214%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E9%BA%BB%E8%BE%A3%E7%83%AB&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 289,
          "is_in_serving": true,
          "description": "老字号，好味道",
          "title": "包子粥店",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5305%5Cu5b50%5Cu7ca5%5Cu5e97%22%2C%22complex_category_ids%22%3A%5B215%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%8C%85%E5%AD%90%E7%B2%A5%E5%BA%97&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 9,
          "is_in_serving": true,
          "description": "内心小公举，一直被宠爱",
          "title": "鲜花蛋糕",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu9c9c%5Cu82b1%5Cu86cb%5Cu7cd5%22%2C%22complex_category_ids%22%3A%5B249%2C250%2C251%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A248%2C%22name%22%3A%22%5Cu9c9c%5Cu82b1%5Cu86cb%5Cu7cd5%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 285,
          "is_in_serving": true,
          "description": "寿司定食，泡菜烤肉",
          "title": "日韩料理",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu65e5%5Cu97e9%5Cu6599%5Cu7406%22%2C%22complex_category_ids%22%3A%5B229%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A260%2C%22name%22%3A%22%5Cu5f02%5Cu56fd%5Cu6599%5Cu7406%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%97%A5%E9%9F%A9%E6%96%99%E7%90%86&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 8,
          "is_in_serving": true,
          "description": "一天变女神",
          "title": "果蔬生鲜",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu679c%5Cu852c%5Cu751f%5Cu9c9c%22%2C%22complex_category_ids%22%3A%5B245%2C246%2C247%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A244%2C%22name%22%3A%22%5Cu679c%5Cu852c%5Cu751f%5Cu9c9c%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%9E%9C%E8%94%AC%E7%94%9F%E9%B2%9C&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 236,
          "is_in_serving": true,
          "description": "大口大口把你吃掉",
          "title": "汉堡薯条",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu6c49%5Cu5821%22%2C%22complex_category_ids%22%3A%5B212%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%B1%89%E5%A0%A1%E8%96%AF%E6%9D%A1&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        },
        {
          "id": 287,
          "is_in_serving": true,
          "description": "西餐始祖，欧洲的味道",
          "title": "披萨意面",
          "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu62ab%5Cu8428%5Cu610f%5Cu9762%22%2C%22complex_category_ids%22%3A%5B211%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A260%2C%22name%22%3A%22%5Cu5f02%5Cu56fd%5Cu6599%5Cu7406%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%8A%AB%E8%90%A8%E6%84%8F%E9%9D%A2&animation_type=1&is_need_mark=0&banner_type=",
          "image_url": "/7/b6/235761e50d391445f021922b71789jpeg.jpeg",
          "icon_url": "",
          "title_color": "",
          "__v": 0
        }
      ]
  }
 )

Mock.mock(RegExp('http://localhost:4000/myshops' + ".*"),
  {
	  "code": 0,
	  data: [
    {
      "name": "嘉禾一品（温都水城）",
      "address": "北京市昌平区宏福苑温都水城F1",
      "id": 1,
      "latitude": 40.10039,
      "longitude": 116.36868,
      "location": [
        116.36868,
        40.10039
      ],
      "phone": "13437850035",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a5859a19c2bc57d52df30b3"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a5859a19c2bc57d52df30b2"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a5859a19c2bc57d52df30b1"
        }
      ],
      "status": 1,
      "recent_order_num": 106,
      "rating_count": 961,
      "rating": 4.7,
      "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "160e91e17fa2164.png",
        "business_license_image": "160e91e0a9f2163.png"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "16018a5c08533.jpeg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2120.1公里",
      "order_lead_time": "31小时24分钟",
      "description": "sad",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [],
      "__v": 0
    },
    {
      "name": "闪电哥哥ghj慰问费22",
      "address": "河南省郑州市蜀山区南二环路天鹅湖万达广场8号楼1705室",
      "id": 479,
      "latitude": 31.81948,
      "longitude": 117.22124,
      "location": [
        93.50611,
        42.84974
      ],
      "phone": "122343adsa",
      "category": "异国料理",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a66f45c76d92175ac4464dd"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a66f45c76d92175ac4464dc"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a66f45c76d92175ac4464db"
        }
      ],
      "status": 1,
      "recent_order_num": 755,
      "rating_count": 167,
      "rating": 4.2,
      "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "161e60bf5b85700.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "1010.3公里",
      "order_lead_time": "21小时7分钟",
      "description": "描述性内容1",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a66f45c76d92175ac4464de"
        }
      ],
      "__v": 0
    },
    {
      "name": "苏州嘻哈包袱铺",
      "address": "江苏省苏州市吴中区吴东路中文基广场(姜家桥公交站南)",
      "id": 485,
      "latitude": 31.26578,
      "longitude": 120.65355,
      "location": [
        120.65355,
        31.26578
      ],
      "phone": "12345678901",
      "category": "商店超市/名酒坊",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6830b41d632b05464db9d1"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6830b41d632b05464db9d0"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6830b41d632b05464db9cf"
        }
      ],
      "status": 1,
      "recent_order_num": 58,
      "rating_count": 576,
      "rating": 4.6,
      "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "16126fe59b83261.jpg",
        "business_license_image": "16126fe55013260.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "161690214004367.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "1167.4公里",
      "order_lead_time": "19小时1分钟",
      "description": "",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6830b41d632b05464db9d2"
        }
      ],
      "__v": 0
    },
    {
      "name": "大树旗舰店2112",
      "address": "广东省广州市天河区东圃镇汇彩路38号1领汇创展商务中心401",
      "id": 486,
      "latitude": 23.1127,
      "longitude": 113.41724,
      "location": [
        113.41724,
        23.1127
      ],
      "phone": "13544323775",
      "category": "快餐便当",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6863641d632b05464dbaea"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6863641d632b05464dbae9"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6863641d632b05464dbae8"
        }
      ],
      "status": 1,
      "recent_order_num": 542,
      "rating_count": 372,
      "rating": 4.2,
      "promotion_info": "大树旗舰店标语",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "09:00/21:30"
      ],
      "license": {
        "catering_service_license_image": "16127c429983306.jpg",
        "business_license_image": "16127c423ae3305.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "16131b317533592.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2128.8公里",
      "order_lead_time": "32小时14分钟",
      "description": "大树旗舰店大树旗舰店大树旗舰店简介",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6863641d632b05464dbaeb"
        }
      ],
      "__v": 0
    },
    {
      "name": "广州酒家",
      "address": "广东省广州市荔湾区上下九商业步行街内",
      "id": 487,
      "latitude": 23.11488,
      "longitude": 113.24826,
      "location": [
        113.24826,
        23.11488
      ],
      "phone": "750",
      "category": "果蔬生鲜/海鲜水产",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a687a781d632b05464dbb35"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a687a781d632b05464dbb34"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a687a781d632b05464dbb33"
        }
      ],
      "status": 0,
      "recent_order_num": 923,
      "rating_count": 871,
      "rating": 4.2,
      "promotion_info": "广州第一家",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "161281e6ef33314.png",
        "business_license_image": "161281e4a723313.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "16164d139ce4307.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2123公里",
      "order_lead_time": "31小时26分钟",
      "description": "喝早茶好去处",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a687a781d632b05464dbb36"
        }
      ],
      "__v": 0
    },
    {
      "name": "闪电老司机",
      "address": "广东省广州市越秀区德政中路171",
      "id": 488,
      "latitude": 23.12092,
      "longitude": 113.27521,
      "location": [
        113.27521,
        23.12092
      ],
      "phone": "2",
      "category": "果蔬生鲜",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a687c8d1d632b05464dbb60"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a687c8d1d632b05464dbb5f"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a687c8d1d632b05464dbb5e"
        }
      ],
      "status": 1,
      "recent_order_num": 483,
      "rating_count": 273,
      "rating": 4.2,
      "promotion_info": "4",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1612b1b689c3352.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2121.6公里",
      "order_lead_time": "31小时26分钟",
      "description": "3",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a687c8d1d632b05464dbb61"
        }
      ],
      "__v": 0
    },
    {
      "name": "123",
      "address": "辽宁省大连市金州区 ",
      "id": 491,
      "latitude": 39.17791,
      "longitude": 122.05169,
      "location": [
        122.05169,
        39.17791
      ],
      "phone": "12345678",
      "category": "快餐便当/包子粥店",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a696b071d632b05464dbd31"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a696b071d632b05464dbd30"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a696b071d632b05464dbd2f"
        }
      ],
      "status": 1,
      "recent_order_num": 49,
      "rating_count": 447,
      "rating": 4.7,
      "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1612bca0ebf3396.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "797.7公里",
      "order_lead_time": "15小时48分钟",
      "description": "",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a696b071d632b05464dbd32"
        }
      ],
      "__v": 0
    },
    {
      "name": "川菜馆111111111",
      "address": "广东省深圳市宝安区留仙二路59",
      "id": 496,
      "latitude": 22.58295,
      "longitude": 113.91455,
      "location": [
        113.91455,
        22.58295
      ],
      "phone": "133333",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a69880a1d632b05464dbe66"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a69880a1d632b05464dbe65"
        }
      ],
      "status": 0,
      "recent_order_num": 68,
      "rating_count": 919,
      "rating": 4.1,
      "promotion_info": "情侣吃饭，免茶位费",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "10:00/23:00"
      ],
      "license": {
        "catering_service_license_image": "",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1612c3b713f3438.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 50,
      "float_delivery_fee": 5,
      "distance": "2167.4公里",
      "order_lead_time": "35小时3分钟",
      "description": "正宗川菜",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a69880a1d632b05464dbe68"
        },
        {
          "icon_name": "特",
          "name": "优惠大酬宾",
          "description": "情侣吃饭，免茶位费",
          "icon_color": "EDC123",
          "id": 2,
          "_id": "5a69880a1d632b05464dbe67"
        }
      ],
      "__v": 0
    },
    {
      "name": "1313",
      "address": "北京市通州区潞苑南大街运通花园1313号楼",
      "id": 499,
      "latitude": 39.9256,
      "longitude": 116.6773,
      "location": [
        116.6773,
        39.9256
      ],
      "phone": "13641266693",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6acb3e1d632b05464dc4a0"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6acb3e1d632b05464dc49f"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6acb3e1d632b05464dc49e"
        }
      ],
      "status": 0,
      "recent_order_num": 597,
      "rating_count": 593,
      "rating": 4.8,
      "promotion_info": "13213213",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "05:30/06:30"
      ],
      "license": {
        "catering_service_license_image": "1613129f6be3558.jpg",
        "business_license_image": "1613129ee4a3557.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "161312802433555.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "42.1公里",
      "order_lead_time": "1小时47分钟",
      "description": "13131",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6acb3e1d632b05464dc4a1"
        }
      ],
      "__v": 0
    },
    {
      "name": "618",
      "address": "北京市昌平区霍营",
      "id": 501,
      "latitude": 40.08277,
      "longitude": 116.36739,
      "location": [
        116.36739,
        40.08277
      ],
      "phone": "18232060789",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6acd3f1d632b05464dc541"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6acd3f1d632b05464dc540"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6acd3f1d632b05464dc53f"
        }
      ],
      "status": 1,
      "recent_order_num": 414,
      "rating_count": 96,
      "rating": 4.1,
      "promotion_info": "618插件网",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "06:00/11:30"
      ],
      "license": {
        "catering_service_license_image": "161313145043561.jpg",
        "business_license_image": "16131312b733560.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1614bab1ea73974.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2.6公里",
      "order_lead_time": "26分钟",
      "description": "618",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6acd3f1d632b05464dc543"
        },
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "1236655",
          "icon_color": "f07373",
          "id": 2,
          "_id": "5a6acd3f1d632b05464dc542"
        }
      ],
      "__v": 0
    },
    {
      "name": "618618",
      "address": "上海市静安区襄阳北路17号3层",
      "id": 502,
      "latitude": 31.22003,
      "longitude": 121.45476,
      "location": [
        121.45476,
        31.22003
      ],
      "phone": "618618",
      "category": "果蔬生鲜/水果",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6adb5a1d632b05464dc62a"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6adb5a1d632b05464dc629"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6adb5a1d632b05464dc628"
        }
      ],
      "status": 0,
      "recent_order_num": 957,
      "rating_count": 527,
      "rating": 4.7,
      "promotion_info": "618618",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "05:45/06:15"
      ],
      "license": {
        "catering_service_license_image": "1613168204c3572.jpg",
        "business_license_image": "161316806d63571.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1613167dd973570.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "1195.5公里",
      "order_lead_time": "21小时4分钟",
      "description": "618618",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6adb5a1d632b05464dc62b"
        }
      ],
      "__v": 0
    },
    {
      "name": "xx",
      "address": "北京市海淀区颐和园路5号",
      "id": 503,
      "latitude": 39.99287,
      "longitude": 116.31025,
      "location": [
        116.31025,
        39.99287
      ],
      "phone": "11111444",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6ae5d41d632b05464dc6a1"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6ae5d41d632b05464dc6a0"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6ae5d41d632b05464dc69f"
        }
      ],
      "status": 1,
      "recent_order_num": 626,
      "rating_count": 707,
      "rating": 4,
      "promotion_info": "111",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "05:30/05:45"
      ],
      "license": {
        "catering_service_license_image": "",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1613191d8bc3579.PNG",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "16.7公里",
      "order_lead_time": "55分钟",
      "description": "1231",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6ae5d41d632b05464dc6a2"
        }
      ],
      "__v": 0
    },
    {
      "name": "3",
      "address": "四川省成都市郫都区郫都区郫都区",
      "id": 506,
      "latitude": 30.73324,
      "longitude": 103.98682,
      "location": [
        103.98682,
        30.73324
      ],
      "phone": "434343434",
      "category": "特色菜系/江浙菜",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6c3cee1d632b05464dcabb"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6c3cee1d632b05464dcaba"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6c3cee1d632b05464dcab9"
        }
      ],
      "status": 1,
      "recent_order_num": 105,
      "rating_count": 440,
      "rating": 4.4,
      "promotion_info": "3434",
      "piecewise_agent_fee": {
        "tips": "配送费约¥4"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "16136ce209f3645.jpg",
        "business_license_image": "16136cdffad3644.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "16136ce034e3643.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 4,
      "distance": "1790.1公里",
      "order_lead_time": "27小时2分钟",
      "description": "3434",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6c3cee1d632b05464dcabc"
        }
      ],
      "__v": 0
    },
    {
      "name": "青岛市金拱门餐饮有限公司",
      "address": "山东省青岛市崂山区以东40公里处",
      "id": 508,
      "latitude": 36.14213,
      "longitude": 120.60168,
      "location": [
        120.60168,
        36.14213
      ],
      "phone": "12580",
      "category": "异国料理",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6d41041d632b05464dcbf7"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6d41041d632b05464dcbf6"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6d41041d632b05464dcbf5"
        }
      ],
      "status": 1,
      "recent_order_num": 596,
      "rating_count": 370,
      "rating": 4.6,
      "promotion_info": "吃鸡",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "11:30/15:45"
      ],
      "license": {
        "catering_service_license_image": "1613ac5ecbb3662.jpg",
        "business_license_image": "1613ac5d99f3661.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1613ac5ba6b3660.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "662公里",
      "order_lead_time": "11小时23分钟",
      "description": "请拨打我们的电话",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "特",
          "name": "优惠大酬宾",
          "description": "傻逼的神臂斗士八度空间阿萨德",
          "icon_color": "EDC123",
          "id": 1,
          "_id": "5a6d41041d632b05464dcbf8"
        }
      ],
      "__v": 0
    },
    {
      "name": "广州大学城",
      "address": "广东省广州市番禺区新造镇小谷围",
      "id": 510,
      "latitude": 23.05013,
      "longitude": 113.38986,
      "location": [
        113.38986,
        23.05013
      ],
      "phone": "q110",
      "category": "快餐便当/米粉面馆",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6dbe431d632b05464dccaa"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6dbe431d632b05464dcca9"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6dbe431d632b05464dcca8"
        }
      ],
      "status": 0,
      "recent_order_num": 965,
      "rating_count": 894,
      "rating": 4.6,
      "promotion_info": "黄焖鸡米饭",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "1613caf47de3679.png",
        "business_license_image": "1613caf430f3678.png"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1613caf14ab3677.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2135.3公里",
      "order_lead_time": "32小时17分钟",
      "description": "黄焖鸡ww",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6dbe431d632b05464dccab"
        }
      ],
      "__v": 0
    },
    {
      "name": "广州大学城黄焖鸡",
      "address": "广东省广州市番禺区大学城外环西路230号",
      "id": 511,
      "latitude": 23.04073,
      "longitude": 113.37072,
      "location": [
        113.37072,
        23.04073
      ],
      "phone": "21107888797",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6dbe8b1d632b05464dccd3"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6dbe8b1d632b05464dccd2"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6dbe8b1d632b05464dccd1"
        }
      ],
      "status": 1,
      "recent_order_num": 269,
      "rating_count": 177,
      "rating": 4.8,
      "promotion_info": "好吃的黄焖鸡",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "1613cb057073682.png",
        "business_license_image": "1613cb054b43681.png"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1614efc2f693987.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2136.6公里",
      "order_lead_time": "32小时21分钟",
      "description": "黄焖鸡",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6dbe8b1d632b05464dccd4"
        }
      ],
      "__v": 0
    },
    {
      "name": "蔡林记",
      "address": "湖北省武汉市东西湖区 ",
      "id": 512,
      "latitude": 30.64141,
      "longitude": 114.04684,
      "location": [
        114.04684,
        30.64141
      ],
      "phone": "15527091536",
      "category": "快餐便当/盖浇饭",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6e87c01d632b05464dce5e"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6e87c01d632b05464dce5d"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6e87c01d632b05464dce5c"
        }
      ],
      "status": 1,
      "recent_order_num": 236,
      "rating_count": 370,
      "rating": 4,
      "promotion_info": "111",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "05:45/11:15"
      ],
      "license": {
        "catering_service_license_image": "",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1613fc23d793695.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "1162.6公里",
      "order_lead_time": "19小时1分钟",
      "description": "111",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [],
      "__v": 0
    },
    {
      "name": "11",
      "address": "山东省青岛市崂山区第十一中学",
      "id": 514,
      "latitude": 36.22215,
      "longitude": 120.5297,
      "location": [
        120.5297,
        36.22215
      ],
      "phone": "11111",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6e8ca81d632b05464dcea4"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6e8ca81d632b05464dcea3"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6e8ca81d632b05464dcea2"
        }
      ],
      "status": 0,
      "recent_order_num": 425,
      "rating_count": 891,
      "rating": 4.4,
      "promotion_info": "111",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "1613fd562343700.jpg",
        "business_license_image": "1613fd56eba3699.png"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1613fd55ba03698.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "645.7公里",
      "order_lead_time": "11小时2分钟",
      "description": "111",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6e8ca81d632b05464dcea6"
        },
        {
          "icon_name": "新",
          "name": "新用户立减",
          "description": "111",
          "icon_color": "70bc46",
          "id": 2,
          "_id": "5a6e8ca81d632b05464dcea5"
        }
      ],
      "__v": 0
    },
    {
      "name": "qqq",
      "address": "湖北省武汉市黄陂区天河国际机场盘龙城巨龙大道196号",
      "id": 516,
      "latitude": 30.71401,
      "longitude": 114.24966,
      "location": [
        114.24966,
        30.71401
      ],
      "phone": "11111",
      "category": "异国料理/披萨意面",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6e8f561d632b05464dcedd"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6e8f561d632b05464dcedc"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6e8f561d632b05464dcedb"
        }
      ],
      "status": 0,
      "recent_order_num": 742,
      "rating_count": 458,
      "rating": 4.1,
      "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
      "piecewise_agent_fee": {
        "tips": "配送费约¥12"
      },
      "opening_hours": [
        "06:30/06:45"
      ],
      "license": {
        "catering_service_license_image": "",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1613fdfe1773703.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 12,
      "distance": "1143公里",
      "order_lead_time": "18小时55分钟",
      "description": "111",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6e8f561d632b05464dcede"
        }
      ],
      "__v": 0
    },
    {
      "name": "天下食谱",
      "address": "上海市黄浦区巨鹿路304-1",
      "id": 518,
      "latitude": 31.22299,
      "longitude": 121.45999,
      "location": [
        121.45999,
        31.22299
      ],
      "phone": "666",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a6e99741d632b05464dcf38"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a6e99741d632b05464dcf37"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a6e99741d632b05464dcf36"
        }
      ],
      "status": 1,
      "recent_order_num": 867,
      "rating_count": 916,
      "rating": 4.7,
      "promotion_info": "sdafsdf",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "06:30/22:45"
      ],
      "license": {
        "catering_service_license_image": "161400760ee3715.jpg",
        "business_license_image": "16140074a273714.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "1614007170f3713.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "1194.9公里",
      "order_lead_time": "21小时1分钟",
      "description": "asdfsda",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "硅谷专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5a6e99741d632b05464dcf39"
        }
      ],
      "__v": 0
    }
  ]
})
Mock.mock(RegExp('http://localhost:4000/sendcode' + ".*"),
{
  "code": 0
})
Mock.mock('http://localhost:4000/login_pwd',
{
  "code": 0,
  "data": {
    "_id": "5a9cd9c6ad5b2d34d42b385d",
    "name": "wang"
  }
}
)
Mock.mock('http://localhost:4000/login_sms',
{
  "code": 0,
  "data": {
    "_id": "5a9cd9c6ad5b2d34d42b385d",
    "phone": "17862707791"
  }
}
)
Mock.mock('http://localhost:4000/userinfo',
  {
    "code": 0,
    "data": {
      "_id": "this,is,a,mock,unit",
      "phone": "17862707790"
    }
  }
)
Mock.mock('http://localhost:4000/logout',
  {
    "code": 0,
  }
)

Mock.mock('/goods',{code:0,data:data.goods})
Mock.mock('/ratings',{code:0,data:data.ratings})
Mock.mock('/info',{code:0,data:data.info})

Mock.mock(RegExp('http://localhost:4000/search_shops' + ".*"),
{
  "code": 0,
  "data": [
    {
      "name": "test_shop",
      "address": "广东省广州市海珠区马涌直街20号",
      "id": 1196,
      "latitude": 23.09499,
      "longitude": 113.26166,
      "location": [
        113.26166,
        23.09499
      ],
      "phone": "18320326523",
      "category": "鲜花蛋糕/面包",
      "supports": [
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5ad00b4febf543051ea2e5f6"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5ad00b4febf543051ea2e5f5"
        }
      ],
      "status": 1,
      "recent_order_num": 444,
      "rating_count": 246,
      "rating": 4,
      "promotion_info": "便靓正",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "09:00/21:30"
      ],
      "license": {
        "catering_service_license_image": "162bcabb96f9264.jpg",
        "business_license_image": "162bcabb9869263.jpg"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "162bcab6f889262.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "2124.6公里",
      "order_lead_time": "31小时27分钟",
      "description": "普通商店",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "蜂鸟专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "参加活动满减优惠",
          "icon_color": "f07373",
          "id": 1,
          "_id": "5ad00b4febf543051ea2e5f7"
        }
      ],
      "__v": 0
    },
    {
      "name": "test",
      "address": "浙江省杭州市余杭区高教路阿里巴巴西溪园区2号楼",
      "id": 1271,
      "latitude": 30.27817,
      "longitude": 120.022003,
      "location": [
        120.022003,
        30.27817
      ],
      "phone": "111",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5ad7101aebf543051ea30192"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5ad7101aebf543051ea30191"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5ad7101aebf543051ea30190"
        }
      ],
      "status": 1,
      "recent_order_num": 820,
      "rating_count": 305,
      "rating": 4.2,
      "promotion_info": "111",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "05:30/05:45"
      ],
      "license": {
        "catering_service_license_image": "162d816cf909817.png",
        "business_license_image": "162d816c82e9816.png"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "162d81696a79815.png",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "1265.1公里",
      "order_lead_time": "18小时13分钟",
      "description": "111",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "蜂鸟专送"
      },
      "activities": [],
      "__v": 0
    }
  ]
}
)