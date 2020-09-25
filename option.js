document.querySelector(".zero").addEventListener("change", function(){
	var terget = this.value;
	if(terget==1){
		document.querySelector("#one").innerHTML = '<select class="west-asia"><option value="">আপনার দেশ নির্বাচন করুন</option><option value="1">বাংলাদেশ</option><option value="2">ভারত</option><option value="3">আমেরিকা</option><option value="4">পাকিস্তান</option></select>';

		document.querySelector(".west-asia").addEventListener("change", function(){
		var tergetcountry = this.value;

		if(tergetcountry==1){
			document.querySelector("#two").innerHTML = '<select class="division"><option value="">আপনার বিভাগ নির্বাচন করুন</option><option value="1">ঢাকা</option><option value="2">চট্রগ্রাম</option><option value="3">রাজশাহী</option><option value="4">খুলনা</option><option value="5">বরিশাল</option><option value="6">সিলেট</option><option value="7">রংপুর</option><option value="8">ময়মনসিংহ</option></select>';
			}

			document.querySelector(".division").addEventListener("change",function(){
				var tergetDivision = this.value;
				 if(tergetDivision ==1){
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">ঢাকা</option><option value="2">নরসিংদী</option><option value="3">গাজীপুর</option><option value="4">শরীয়তপুর</option><option value="5">নারায়ণগঞ্জ</option><option value="6">টাঙ্গাইল</option><option value="7">কিশোরগঞ্জ</option><option value="8">মানিকগঞ্জ</option><option value="9">মুন্সিগঞ্জ</option><option value="10">রাজবাড়ী</option><option value="11">মাদারীপুর</option><option value="12">গোপালগঞ্জ</option><option value="13">ফরিদপুর</option></select>';

					document.querySelector(".zilla").addEventListener("change",function(){
						var word2 = this.value;
						if(word2==2){
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==3){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==4){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==5){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==6){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==7){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==8){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==9){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==10){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==11){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==12){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						} else if(word2==13){
							
							document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						}
					});




				} else if(tergetDivision ==2){
					
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">চট্রগ্রাম</option><option value="2">কুমিল্লা</option><option value="3">ব্রাম্মনবাড়িয়া</option><option value="4">রাঙ্গামাটি</option><option value="5">নোয়াখালি</option><option value="6">চাঁদপুর</option><option value="7">লক্ষ্মীপুর</option><option value="8">কক্সবাজার</option><option value="9">খাগড়াছড়ি</option><option value="10">বান্দরবান</option><option value="11">ফেনী</option></select>';

				} else if(tergetDivision ==3){
					
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">রাজশাহী</option><option value="2">সিরাজগঞ্জ</option><option value="3">জয়পুরহাট</option><option value="4">চাপাইনবাবগঞ্জ</option><option value="5">পাবনা</option><option value="6">বগুড়া</option><option value="7">নাটোর</option><option value="8">নওগাঁ</option></select>';

				} else if(tergetDivision ==4){
					
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">খুলনা</option><option value="2">যশোর</option><option value="3">মেহেরপুর</option><option value="4">নড়াইল</option><option value="5">চুয়াডাঙ্গা</option><option value="6">কুষ্টিয়া</option><option value="7">মাগুরা</option><option value="8">বাগেরহাট</option><option value="9">ঝিনাইদাহ</option></select>';

				} else if(tergetDivision ==5){
					
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">বরিশাল</option><option value="2">ঝালকাঠি</option><option value="3">পটুয়াখালী</option><option value="4">পিরোজপুর</option><option value="5">ভোলা</option><option value="6">বরগুনা</option></select>';

				} else if(tergetDivision ==6){
					
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">সিলেট</option><option value="2">মৌলভীবাজার</option><option value="3>হবিগঞ্জ</option><option value="4">সুনামগঞ্জ</option></select>';

				} else if(tergetDivision ==7){
					
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">রংপুর</option><option value="2">পঞ্চগড়</option><option value="3>দিনাজপুর</option><option value="4">লালমনিরহাট</option><option value="5">গাইবান্ধা</option><option value="6">ঠাকুরগাঁও</option><option value="7">কুড়িগ্রাম</option><option value="8">নীলফামারী</option></select>';

				} else if(tergetDivision ==8){
					
					document.querySelector("#three").innerHTML = '<select class="zilla"><option value="">আপনার জেলা নির্বাচন করুন</option><option value="1">ময়মনসিংহ</option><option value="2">শেরপুর</option><option value="3>জামালপুর</option><option value="4">নেত্রকোণা</option></select>';

				}

				document.querySelector(".zilla").addEventListener("change",function(){
					var tergetDivisi = this.value;
					 if(tergetDivisi ==1){
						document.querySelector("#four").innerHTML = '<select class="oard"><option value="">আপনার ওয়ার্ড নির্বাচন করুন</option><option value="1">১নং ওয়ার্ড</option><option value="1">২নং ওয়ার্ড</option><option value="1">৩নং ওয়ার্ড</option><option value="1">৪নং ওয়ার্ড</option><option value="1">৫নং ওয়ার্ড</option><option value="1">৬নং ওয়ার্ড</option></select>';

						document.querySelector(".oard").addEventListener("change",function(){
							var vill = this.value;
							if(vill==1){
								document.querySelector("#five").innerHTML = '<select class="gram"><option>আপনার এলাকা নির্বাচন করুন </option><option>koikury</option></select>';

							}
						});	
						};});

					;});

				});}




	 else if(terget==2){
		document.querySelector("#country").innerHTML = '<select class="north-asia"><option value="">Select your country</option><option value="1">india</option><option value="2">afrika</option><option value="3">afrika</option></select>';

			document.querySelector(".north-asia").addEventListener("change", function(){
		var tergetcountry = this.value;

		if(tergetcountry==1){
			document.querySelector("#district").innerHTML = '<select class="dist"><option value="">Select your district</option><option value="1">asan</option><option value="2">tripura</option><option value="3">kolkata</option></select>';
			}});
	} 



	else if(terget==3){
		document.querySelector("#country").innerHTML = '<select class="countrys"><option value="">Select your country</option><option value="1">amerika</option><option value="2">afrika</option><option value="3">afrika</option></select>';
	}
	else if(terget==4){
		document.querySelector("#country").innerHTML = '<select class="countrys"><option value="">Select your country</option><option value="1">amerika</option><option value="2">afrika</option><option value="3">afrika</option></select>';
	}
	else if(terget==5){
		document.querySelector("#country").innerHTML = '<select class="countrys"><option value="">Select your country</option><option value="1">amerika</option><option value="2">afrika</option><option value="3">afrika</option></select>';
	}
	else if(terget==6){
		document.querySelector("#country").innerHTML = '<select class="countrys"><option value="">Select your country</option><option value="1">amerika</option><option value="2">afrika</option><option value="3">afrika</option></select>';
	}
	else if(terget==7){
		document.querySelector("#country").innerHTML = '<select class="countrys"><option value="">Select your country</option><option value="1">amerika</option><option value="2">afrika</option><option value="3">afrika</option></select>';
	}
	

});
