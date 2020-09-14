const Timezones = [
  { useDaylightTime: 0, value:-12, name:"(GMT-12:00) International Date Line West" },
	{ useDaylightTime:0, value:-11, name:"(GMT-11:00) Midway Island, Samoa"},
	{ useDaylightTime:0, value:-10, name:"(GMT-10:00) Hawaii"},
	{ useDaylightTime:1, value:-9, name:"(GMT-09:00) Alaska"},
	{ useDaylightTime:1, value:-8, name:"(GMT-08:00) Pacific Time (US & Canada)"},
	{ useDaylightTime:1, value:-8, name:"(GMT-08:00) Tijuana, Baja California"},
	{ useDaylightTime:0, value:-7, name:"(GMT-07:00) Arizona"},
	{ useDaylightTime:1, value:-7, name:"(GMT-07:00) Chihuahua, La Paz, Mazatlan"},
	{ useDaylightTime:1, value:-7, name:"(GMT-07:00) Mountain Time (US & Canada)"},
	{ useDaylightTime:0, value:-6, name:"(GMT-06:00) Central America"},
	{ useDaylightTime:1, value:-6, name:"(GMT-06:00) Central Time (US & Canada)"},
	{ useDaylightTime:1, value:-6, name:"(GMT-06:00) Guadalajara, Mexico City, Monterrey"},
	{ useDaylightTime:0, value:-6, name:"(GMT-06:00) Saskatchewan"},
	{ useDaylightTime:0, value:-5, name:"(GMT-05:00) Bogota, Lima, Quito, Rio Branco"},
	{ useDaylightTime:1, value:-5, name:"(GMT-05:00) Eastern Time (US & Canada)"},
	{ useDaylightTime:1, value:-5, name:"(GMT-05:00) Indiana (East)"},
	{ useDaylightTime:1, value:-4, name:"(GMT-04:00) Atlantic Time (Canada)"},
	{ useDaylightTime:0, value:-4, name:"(GMT-04:00) Caracas, La Paz"},
	{ useDaylightTime:0, value:-4, name:"(GMT-04:00) Manaus"},
	{ useDaylightTime:1, value:-4, name:"(GMT-04:00) Santiago"},
	{ useDaylightTime:1, value:-3.5, name:"(GMT-03:30) Newfoundland"},
	{ useDaylightTime:1, value:-3, name:"(GMT-03:00) Brasilia"},
	{ useDaylightTime:0, value:-3, name:"(GMT-03:00) Buenos Aires, Georgetown"},
	{ useDaylightTime:1, value:-3, name:"(GMT-03:00) Greenland"},
	{ useDaylightTime:1, value:-3, name:"(GMT-03:00) Montevideo"},
	{ useDaylightTime:1, value:-2, name:"(GMT-02:00) Mid-Atlantic"},
	{ useDaylightTime:0, value:-1, name:"(GMT-01:00) Cape Verde Is."},
	{ useDaylightTime:1, value:-1, name:"(GMT-01:00) Azores"},
	{ useDaylightTime:0, value:0, name:"(GMT+00:00) Casablanca, Monrovia, Reykjavik"},
	{ useDaylightTime:1, value:0, name:"(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},
	{ useDaylightTime:1, value:1, name:"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},
	{ useDaylightTime:1, value:1, name:"(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"},
	{ useDaylightTime:1, value:1, name:"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"},
	{ useDaylightTime:1, value:1, name:"(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb"},
	{ useDaylightTime:1, value:1, name:"(GMT+01:00) West Central Africa"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Amman"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Athens, Bucharest, Istanbul"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Beirut"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Cairo"},
	{ useDaylightTime:0, value:2, name:"(GMT+02:00) Harare, Pretoria"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Jerusalem"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Minsk"},
	{ useDaylightTime:1, value:2, name:"(GMT+02:00) Windhoek"},
	{ useDaylightTime:0, value:3, name:"(GMT+03:00) Kuwait, Riyadh, Baghdad"},
	{ useDaylightTime:1, value:3, name:"(GMT+03:00) Moscow, St. Petersburg, Volgograd"},
	{ useDaylightTime:0, value:3, name:"(GMT+03:00) Nairobi"},
	{ useDaylightTime:0, value:3, name:"(GMT+03:00) Tbilisi"},
	{ useDaylightTime:1, value:3.5, name:"(GMT+03:30) Tehran"},
	{ useDaylightTime:0, value:4, name:"(GMT+04:00) Abu Dhabi, Muscat"},
	{ useDaylightTime:1, value:4, name:"(GMT+04:00) Baku"},
	{ useDaylightTime:1, value:4, name:"(GMT+04:00) Yerevan"},
	{ useDaylightTime:0, value:4.5, name:"(GMT+04:30) Kabul"},
	{ useDaylightTime:1, value:5, name:"(GMT+05:00) Yekaterinburg"},
	{ useDaylightTime:0, value:5, name:"(GMT+05:00) Islamabad, Karachi, Tashkent"},
	{ useDaylightTime:0, value:5.5, name:"(GMT+05:30) Sri Jayawardenapura"},
	{ useDaylightTime:0, value:5.5, name:"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"},
	{ useDaylightTime:0, value:5.75, name:"(GMT+05:45) Kathmandu"},
	{ useDaylightTime:1, value:6, name:"(GMT+06:00) Almaty, Novosibirsk"},
	{ useDaylightTime:0, value:6, name:"(GMT+06:00) Astana, Dhaka"},
	{ useDaylightTime:0, value:6.5, name:"(GMT+06:30) Yangon (Rangoon)"},
	{ useDaylightTime:0, value:7, name:"(GMT+07:00) Bangkok, Hanoi, Jakarta"},
	{ useDaylightTime:1, value:7, name:"(GMT+07:00) Krasnoyarsk"},
	{ useDaylightTime:0, value:8, name:"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi"},
	{ useDaylightTime:0, value:8, name:"(GMT+08:00) Kuala Lumpur, Singapore"},
	{ useDaylightTime:0, value:8, name:"(GMT+08:00) Irkutsk, Ulaan Bataar"},
	{ useDaylightTime:0, value:8, name:"(GMT+08:00) Perth"},
	{ useDaylightTime:0, value:8, name:"(GMT+08:00) Taipei"},
	{ useDaylightTime:0, value:9, name:"(GMT+09:00) Osaka, Sapporo, Tokyo"},
	{ useDaylightTime:0, value:9, name:"(GMT+09:00) Seoul"},
	{ useDaylightTime:1, value:9, name:"(GMT+09:00) Yakutsk"},
	{ useDaylightTime:0, value:9.5, name:"(GMT+09:30) Adelaide"},
	{ useDaylightTime:0, value:9.5, name:"(GMT+09:30) Darwin"},
	{ useDaylightTime:0, value:10, name:"(GMT+10:00) Brisbane"},
	{ useDaylightTime:1, value:10, name:"(GMT+10:00) Canberra, Melbourne, Sydney"},
	{ useDaylightTime:1, value:10, name:"(GMT+10:00) Hobart"},
	{ useDaylightTime:0, value:10, name:"(GMT+10:00) Guam, Port Moresby"},
	{ useDaylightTime:1, value:10, name:"(GMT+10:00) Vladivostok"},
	{ useDaylightTime:1, value:11, name:"(GMT+11:00) Magadan, Solomon Is., New Caledonia"},
	{ useDaylightTime:1, value:12, name:"(GMT+12:00) Auckland, Wellington"},
	{ useDaylightTime:0, value:12, name:"(GMT+12:00) Fiji, Kamchatka, Marshall Is."},
	{ useDaylightTime:0, value:13, name:"(GMT+13:00) Nuku'alofa"}
];

export default Timezones;