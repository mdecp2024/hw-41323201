var tipuesearch = {"pages": [{'title': 'about', 'text': '國立虎尾科技大學機械設計工程系 \n 國立台灣大學 \n 機械設計工程系 \n cp2024 電腦程式 \n 課程教材： \n 使用 Jupyter 學習 Python （ 網站 、 電子書 ） \n 教育版帳號 microsoftonline 登錄點:\xa0  https://login.microsoftonline.com/ \n 團隊線上教學： \n 以「學號@nfu.edu.tw」登入 https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼： fqpabi8 \n \n 連結以太坊：\xa0 https:  //github.com/mdecp2024/hw-41323201 \n 網站連結： https:  //mdecp2024.github.io/hw-41323201 \n 其他資訊： \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'about.html'}, {'title': 'Attendance', 'text': '出席人數 (10%) - 自行舉證評分 \n 自行利用 Github 提交提交記錄評分。 \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW\xa01', 'text': '主題：基於瀏覽器的分散式版本次管理與整合方案開發環境（10%） \n USB隨身碟： \n 下載 python_2025_lite.7z  (428 MB, 解開壓縮後約1.5 GB) \n Jupiter \n 什麼是 Github 和 Codespace？ \n 你好世界 - GitHub 文檔 \n 利用包含學號的字串作為帳號，申請免費使用Github。 \n Python 課程教材： https://www.learnpythonwithjupyter.com/  - PART 1 \n \n 第 1 部分：建立基礎知識資料整理 (10%) \n 啟動可攜程序系統後，在命令列中: \n y:\\>cd Notebook \n y:\\notebook>jupyter lab --collaborative \n 進入 01_string_input_print.ipynb 練習如何修改PART1筆記本後存檔，上傳至作業文檔中的下載目錄後，穿過 https://nbviewer.org/ 將已經提交的 01_string_input_print.ipynb ，嵌入以下網頁中。 \n \n 上列 iframe 標註的 html 語法： \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後，滿足HW1自評分數輸入cp2024自評表單中。 \n \n', 'tags': '', 'url': 'HW\xa01.html'}, {'title': 'HW 1-1 Triangle Star', 'text': '\n 向ChatGPT詢問20種五階金字塔的寫法 \n \n 幫我用python寫一個五階金字塔，由*組成，給我20個不同的寫法 \n 1.基本迴圈 \n 對於範圍 (1, 6) 內的 i： \n    print(\' \' * (5 - i) + \'*\' * (2 * i - 1)) \n \n 2.使用字串連接 \n For i in the range (1, 6): \n    Space = \' \' * (5 - i) \n    star = \'*\' * (2 * i - 1) \n    列印（空格+星號） \n \n 3. Using format strings \n For i in the range (1, 6): \n    print(f"{\' \' * (5 - i)}{\'*\' * (2 * i - 1)}") \n \n 4.列表產生方式 \n monument = [\' \' * (5 - i) + \'*\' * (2 * i - 1) for i in range(1, 6)] \nprint(\'\\n\'.join(pyramid)) \n \n 5. 使用函數 \n def print_pyramid(n): \n    對於範圍 (1, n + 1) 中的 i： \n        print(\' \' * (n - i) + \'*\' * (2 * i - 1)) \n \nPrinting Pyramid (5) \n \n 6.反向迴圈 \n 對於範圍 (5, 0, -1) 內的 i： \n    print(\' \' * (5 - i) + \'*\' * (2 * i - 1)) \n \n 7. Use join \n For i in the range (1, 6): \n    print(\'\'.join([\' \' * (5 - i), \'*\' * (2 * i - 1)])) \n \n 8. Use map \n For i in the range (1, 6): \n    print(\'\'.join(map(str, [\' \' * (5 - i), \'*\' * (2 * i - 1)]))) \n \n 9. 使用遞回 \n def print_recursive(n, currently=1): \n    如果當前> n： \n        return \n    print(\' \' * (n - current) + \'*\' * (2 * current - 1)) \n    print_recursive(n, current + 1) \n \n遞歸列印(5) \n \n 10.使用 while 迴圈 \n I = 1 \n當我 <= 5 時： \n    print(\' \' * (5 - i) + \'*\' * (2 * i - 1)) \n    I += 1 \n \n 11. Use str.format \n For i in the range (1, 6): \n    print(\'{}{}\'.format(\' \' * (5 - i), \'*\' * (2 * i - 1))) \n \n 12. Use  f-string and list comprehension \n 金字塔 = [f"{\' \' * (5 - i)}{\'*\' * (2 * i - 1)}" for i in range(1, 6)] \nprint(\'\\n\'.join(pyramid)) \n \n 13. 使用 print 的多參數 \n For i in the range (1, 6): \n    print(\' \' * (5 - i), \'*\' * (2 * i - 1), sep=\'\') \n \n 14. Use zip \n NULL = [\' \' * (5 - i) for i in range(1, 6)] \n星星 = [\'*\' * (2 * i - 1) for i in range(1, 6)] \n對於 zip 中的 s、st（空格、星號）： \n    Print (s + st) \n \n 15. Use reduce \n 從 functools 匯入減少 \npyramid = reduce(lambda acc, i: acc + [\' \' * (5 - i) + \'*\' * (2 * i - 1)], range(1, 6), []) \nprint(\'\\n\'.join(pyramid)) \n \n 16. Use numpy \n 將 numpy 導入為 np \n金字塔 = np.array([\' \' * (5 - i) + \'*\' * (2 * i - 1) for i in range(1, 6)]) \nprint(\'\\n\'.join(pyramid)) \n \n 17. 使用類別 \n 金字塔類： \n    def __init__(self, height): \n        Self height = height \n \n    def 繪製（自身）： \n        對於範圍內的 i(1, self.height + 1): \n            print(\' \' * (self.height - i) + \'*\' * (2 * i - 1)) \n \np = pyramid(5) \np.draw() \n \n 18. Use Generators \n defgenerate_pyramid(n): \n    對於範圍 (1, n + 1) 中的 i： \n        產量 \' \' * (n - i) + \'*\' * (2 * i - 1) \n \n對於generate_pyramid(5)中的行： \n    Print (row) \n \n 19. Use itertools \n 從 itertools 匯入重複 \n對於範圍 (1, 6) 內的 i： \n    print(\'\'.join(重複(\' \', 5 - i) + 重複(\'*\', 2 * i - 1))) \n \n 20. 使用 string 模組 \n 導入字串 \nFor i in the range (1, 6): \n    print(string.whitespace * (5 - i) + \'*\' * (2 * i - 1)) \n \n >pythonw.exe -u“triangle_star.py” \n \n\xa0 \xa0 * \n \n\xa0 \xa0*** \n \n\xa0 ***** \n \n\xa0****** \n \n********* \n \n>退出代碼：0 \n \n', 'tags': '', 'url': 'HW 1-1 Triangle Star.html'}, {'title': 'HW 1-2 模擬排列', 'text': '1.開啟可攜環境 \n 2.在 可攜式程式環境中開啟data>CoppeliaSim，開啟coppeliaSim.exe \xa0 \n 3. 下載 zmq_remote_api_ex_cube_triangle.7z \xa0 \xa0 \n 4.開啟 zmq_remote_api_ex_cube_triangle，將 put_cubes_into_scene_1.py放入 SciTE編輯器 \n \n 5.讓 SciTE 編輯器運行 \n \n \n', 'tags': '', 'url': 'HW 1-2 模擬排列.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行良好的程序練習 \n 透過Jupyterlab良好的網頁，輪流指定各組編寫的主題1相關的程式練習，以及網頁內容（localhost與Codespaces環境）編輯。 \n \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '如何在倉儲中增加Brython: \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一 \n \n Brython頁面:只需直接複製指令 \n SciTE 編輯器:新增檔案檔名後須加上".py"再複製指令 \n 命令提示字元視窗:先打入cmd，再輸入python，便可輸入指令 \n Jupyter Lab:先在命令提示字元視窗輸入cd Notebook，再輸入jupyter lab --collaborative，便可打開Jupyter Lab，新增網頁將指令貼上 \n Codespaces:新增網頁，安裝python模組，在上方打入指令 \n 題目二 \n \n Python 變數命名的規則: \n \n \n 以字母或下劃線開頭：變數名稱必須以字母（ a-z  或  A-Z ）或下劃線（ _ ）開頭，後面可以跟數字或字母。 \n 不能使用 Python 關鍵字：Python 的關鍵字（如  if 、 for 、 while  等）有特殊的語法意圖，不能用作變數名稱。 \n 不區分大小寫：Python 是大小寫敏感的，因此  my_var  和  MY_VAR  是兩個不同的變數。 \n 避免使用特殊符號：變數名稱中只能使用字母、數字和下劃線，不能包含如  @ ,  # ,  ! ,  *  等特殊字符。 \n 遵循 PEP 8 風格指南：根據 Python 官方的編碼風格指南，變數名稱應使用小寫字母和下劃線分隔單詞（例如  user_name ），類別名稱使用駝峰式命名（例如  MyClass ）。 \n \n 針對 Python 程式命名的規則編寫程式: \n import keyword\n\n# 1. 顯示所有 Python 的關鍵字\nprint("Python 關鍵字 (保留字):")\nprint(keyword.kwlist)  # 輸出所有關鍵字\n\n# 2. 合法的變數名稱（遵守命名規範）\nuser_name = "Alice"\nuser_age = 30\nPI = 3.14159\nprint(f"使用者名稱: {user_name}, 年齡: {user_age}, 圓周率: {PI}")\n\n# 3. 使用非法的變數名稱（關鍵字）\n# 關鍵字 \'if\' 是 Python 的保留字，這裡會引發 SyntaxError\n# if = "非法變數名稱"  # 取消註解這一行會引發錯誤\n\n# 4. 使用單下劃線開頭的變數（表示內部變數）\n_private_var = "這是內部變數"\nprint(f"內部變數: {_private_var}")\n\n# 5. 使用雙下劃線開頭的變數（名稱重整）\nclass MyClass:\n    def __init__(self):\n        self.__private_attribute = "隱藏屬性"\n    \n    def get_private_attribute(self):\n        return self.__private_attribute\n\nmy_object = MyClass()\nprint(f"透過方法訪問隱藏屬性: {my_object.get_private_attribute()}")\n\n# 6. 使用單下劃線作為不關心的變數\nfor _ in range(3):  # 我們只關心迴圈次數，不關心具體的值\n    print("這是一次迴圈執行")\n \n 結果: \n Python 關鍵字 (保留字):\n[\'False\', \'None\', \'True\', \'and\', \'as\', \'assert\', \'async\', \'await\', \'break\', \'class\', \'continue\', \'def\', \'del\', \'elif\', \'else\', \'except\', \'finally\', \'for\', \'from\', \'global\', \'if\', \'import\', \'in\', \'is\', \'lambda\', \'nonlocal\', \'not\', \'or\', \'pass\', \'raise\', \'return\', \'try\', \'while\', \'with\', \'yield\']\n使用者名稱: Alice, 年齡: 30, 圓周率: 3.14159\n內部變數: 這是內部變數\n透過方法訪問隱藏屬性: 隱藏屬性\n這是一次迴圈執行\n這是一次迴圈執行\n這是一次迴圈執行 \n 題目三 \n \n 利用 Python 程式解決物理與微積分，相同指令在前四種環境都成功，但在命令提示字元視窗中失敗。 \n 心得: \n 這次利用五種不同的環境來運行Python，所以哪天你無法使用其中一種方式，使用其他還是可以寫程式，且找出如何讓這些環境運行Python的方式也很有趣。 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '\n \n \n 第一題的程式 \n 1.  匯入模組 \n import math \n \n math  是 Python 的數學模組，用來執行數學相關的計算。 \n \n 在這段程式中，我們用到了  math.sqrt  函數來計算平方根，這是用來測量點與圓心之間的距離。 \n 2.  定義變數 \n size = 10\nradius = size // 2\ncenter = radius - 0.5 \n \n size  是顯示區域的大小，設定為  10 ，表示會有 10 行與 10 列。 \n \n radius  是圓的半徑，設定為  size // 2 （整數除法），所以半徑為  5 。 \n center  是圓心的座標，計算為  radius - 0.5 ，這樣可以更接近圓的中心位置，避免偏差。 \n 3.  雙層迴圈：生成圖案 \n \n \n size = 10\nradius = size // 2\ncenter = radius - 0.5 \n外層迴圈控制 列 (y)，內層迴圈控制 行 (x)，遍歷區域的每個點。 \n \n range(size)  會產生從  0  到  size-1  的整數範圍。 \n \n 4.  計算與圓心的距離 \n distance = math.sqrt((x - center) ** 2 + (y - center) ** 2) \n \n 每個點  (x, y)  到圓心  (center, center)  的距離使用公式計算：  距離 = ( x − 圓心x ) 2 + ( y − 圓心y ) 2 \n \n 將這個點的座標代入後，距離會決定該點是否屬於圓內。 \n \n 5.  判斷並繪製圖案 \n if distance <= radius:\n    print(" * ", end="")\nelse:\n    print("   ", end="")\n \n \n 如果距離  distance  小於或等於圓的半徑  radius ，表示該點在圓內，則打印  " * " 。 \n \n 否則打印空白  " " ，用來填充圓外的區域。 \n end=""  確保在同一行內打印多個字符。 \n \n 6.  換行 \n print() \n \n 內層迴圈完成一行後，透過這行程式碼換行，準備打印下一行。 \n \n \n 第二題的程式 \n 1.導入所需的模組 \n from browser import html \nfrom browser import document as doc \n browser.html ：用於建立和操作 HTML 元素。 \n browser.document ：用於操作 HTML DOM 文件（例如存取或修改網頁上的元素）。 \n \n 2.建立一個畫布 (canvas) 元素 \n canvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas \n 建立一個 400×400 像素大小的  <canvas>  元素。 \n 找到 HTML 中的  brython_div1  元素，並將畫布加入這個元素中。 \n \n 3.定義全域參數 \n gs = 20  # 每一格的像素大小\ncenter = (5, 5)  # 圓的中心點座標（格子單位）\nradius = 5  # 圓的半徑（格子單位） \n gs ：每個格子邊長為 20 像素，畫布總共是 10×10 格（400 ÷ 20）。 \n center ：圓心位置以格子為單位，(5, 5) 是中心。 \n radius ：圓的半徑是 5 格。 \n \n 4.獲取畫布的 2D 繪圖上下文 \n ctx = canvas.getContext("2d")\n \n ctx  是畫布的繪圖上下文，提供了用來繪製圖形的方法。 \n \n 5.畫矩形框線 \n def dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke() \n \n dRect  是一個用來繪製矩形框線的函數： \n \n \n (lux, luy) ：矩形的左上角位置。 \n w, h ：矩形的寬和高。 \n s ：框線的寬度。 \n c ：框線的顏色（預設是紅色）。 \n \n 使用  ctx.rect()  定義矩形，然後用  ctx.stroke()  繪製邊框。 \n \n 6. 繪製網格 \n \n \n def grid(width, height, grid_pix):\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n \n繪製整個畫布的網格： \n \n \n 以  width × height  的格子數量進行迴圈。 \n 每個格子大小為  grid_pix  ×  grid_pix （此例中是 20 像素）。 \n 每個格子框線使用淺灰色。 \n \n 7. 填充格子 \n \n \n def fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x, y, gs, gs) \n fill  函數用於填充一個格子： \n \n \n (x, y)  是格子的左上角座標。 \n color  指定填充的顏色。 \n 使用  ctx.fillRect()  填滿。 \n \n 8. 繪製圓形 \n def drawCircle(center, radius, gs):\n    for y in range(10):\n        for x in range(10):\n            cx = x + 0.5  # 格子的中心 x 座標\n            cy = y + 0.5  # 格子的中心 y 座標\n            dist = ((cx - center[0]) ** 2 + (cy - center[1]) ** 2) ** 0.5\n            if dist <= radius:\n                fill(x * gs, y * gs, "black") \n \n 用來繪製圓形，實現方法： \n \n \n 使用兩層迴圈遍歷 10×10 的格子。 \n 計算每個格子中心  (cx, cy)  與圓心  (center[0], center[1])  的距離。 \n 如果距離小於等於半徑，則填充該格子為黑色。 \n \n 9. 繪製網格與圓形 \n grid(10, 10, gs)\ndrawCircle(center, radius, gs) \n \n 先繪製整個網格，然後在網格上繪製圓形。 \n \n \n 心得 \n \n 這次的作業是將過去所教的程式複習了一次，而我覺得用程式以方形列出圓形是非常有挑戰性的，更有趣的是將數學和程式運用在一起。 \n \n \n \n 列出數字 \n 繪製棋盤 \n https://mde.tw/cp2024/content/Exam.html \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '第一題:Text, questions, and art (文字、問題和藝術) \n 說明:Strings, input(), and print() (字串、input()和print()) \n input()程式範例: What\'s your name? \n input("What\'s your name?") \n print()程式範例: cat \n print ("   /\\_/\\   ")\nprint (" >^.^<   ")\nprint ("    / \\    ")\nprint ("   (___)___") \n \n 第二題:Events and favorites(活動和最愛) \n 說明:Variables and string concatenation(變數和字串連接) \n 範例程式: 名字 \n first_name = "yu" #變數first_name為"自己的姓"\nlast_name  = "chang" #變數last_name為"自己的名"\nprint (first_name) #列印變數first_name\nprint (last_name) #列印變數last_name \n 範例程式: 名字+最愛的食物 \n name = input("What\'s your name?") #變數name為input所輸入之文字\nfavorite_food = input ("What is your favorite food?") #變數favorite_food為input所輸入之文字\nprint ("Hi! My name is " + name) #列印"Hi! My name is "(這段為文字) + name(name這個變數的數值)\nprint ("My favorite food is " + favorite_food)  #列印"My favorite food is "(這段為文字) + favorite_food(favorite_food這個變數的數值)\nprint (name + "\'s favorite food is " + favorite_food) #列印name (數值)+ \'s favorite food is (此段為文字)+favorite_food(數值) \n \n 第三題:In a bookstore(在書店) \n 說明:Lists and if... in... / else... (列表和 if... in... / else...) \n 範例程式: if \n programming_books = ["Learn python", "Python for all",  "Intro to python"]\nprint (programming_books)\nwanted_book = input("Hi! What book would you like to buy?")\nprint (wanted_book)\nif wanted_book in programming_books:\n    print ("Yes, we sell it!")\nelse:\n    print ("Sorry, we don\'t sell that book") \n \n 第四題:Grocery shopping(雜貨店購物) \n 說明:List methods: .append() and .remove() (列表方法: .append() and .remove()) \n 範例程式: append() and remove() \n shopping_list = ["carrots", "chocolate", "olives"]\nprint (shopping_list)\nnew_item = input("What else do I have to buy?")\n\nif new_item in shopping_list:\n    print (new_item + " is/are already in the shopping list")\n    print (shopping_list) \nelse:\n    shopping_list.append(new_item)\n    print (shopping_list)\n    item_to_remove = input("What do I have to remove?")\n\nif item_to_remove in shopping_list:\n    shopping_list.remove(item_to_remove)\n    print (shopping_list)\nelse:\n    print (item_to_remove + " is/are not in the list")\n    print (shopping_list) \n \n 第五題:Customizing the burger menu(自訂漢堡菜單) \n 說明:List methods: .index(), .pop(), and .insert() (列表方法: .index(), .pop(), and .insert()) \n 範例程式: menu \n todays_menu = ["burger", "salad", "coke"] #todays_menu變數=今天菜單["burger", "salad", "coke"\nside_dish_index = todays_menu.index("salad") #side_dish_index變數 = 今日菜單.找出"沙拉"位於字串中第幾個\nprint (side_dish_index) #列印side_dish_index  列印他在第幾位\ntodays_menu.pop(side_dish_index) #今日菜單.移除字串中的元素(side_dish_index變數"沙拉")  這裡意思是移除沙拉\nprint (todays_menu) #列印今日菜單\ntodays_menu.insert(side_dish_index, "fries") #今日菜單.在字串中插入(side_dish_index, "fries")   這裡意思是加入薯條\nprint (todays_menu) #列印今日菜單 \n \n    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n 第六題:Traveling around the world(環遊世界) \n 說明: List slicing(串列切片) \n 範例程式: 城市 \n # 定義一個名為 cities 的串列，包含五個城市名稱\ncities = ["San Diego", "Prague", "Cape Town", "Tokyo", "Melbourne"]\n\n# 列印整個串列\nprint (cities)  # [\'San Diego\', \'Prague\', \'Cape Town\', \'Tokyo\', \'Melbourne\']\n\n# 列印索引為 1 的元素\nprint (cities[1])  # \'Prague\'\n\n# 列印從索引 1 到 3 的元素（不包含索引 4）\nprint (cities[1:4])  # [\'Prague\', \'Cape Town\', \'Tokyo\']\n\n# 列印從索引 1 到 3 的元素，間隔為 2\nprint (cities[1:4:2])  # [\'Prague\', \'Tokyo\']\n\n# 列印從索引 0 到 2 的元素（不包含索引 3）\nprint (cities[0:3])  # [\'San Diego\', \'Prague\', \'Cape Town\']\n\n# 列印從開始到索引 2 的元素（不包含索引 3）\nprint (cities[:3])  # [\'San Diego\', \'Prague\', \'Cape Town\']\n\n# 列印從索引 2 到 4 的元素（不包含索引 5）\nprint (cities[2:5])  # [\'Cape Town\', \'Tokyo\', \'Melbourne\']\n\n# 列印從索引 2 到最後的元素\nprint (cities[2:])  # [\'Cape Town\', \'Tokyo\', \'Melbourne\']\n\n# 列印從索引 0 到 4 的元素，每隔 2 個元素\nprint (cities[0:5:2])  # [\'San Diego\', \'Cape Town\', \'Melbourne\']\n\n# 列印從頭到尾的元素，每隔 2 個元素\nprint (cities[::2])  # [\'San Diego\', \'Cape Town\', \'Melbourne\']\n\n# 列印索引為 4 的元素\nprint (cities[4])  # \'Melbourne\'\n\n# 列印最後一個元素（索引 -1）\nprint (cities[-1])  # \'Melbourne\'\n\n# 列印從索引 -4 到 -2 的元素（不包含索引 -1）\nprint (cities[-4:-1])  # [\'Prague\', \'Cape Town\', \'Tokyo\']\n\n# 列印從索引 3 到 1，反向取值\nprint (cities[3:0:-1])  # [\'Tokyo\', \'Cape Town\', \'Prague\']\n\n# 列印從索引 -2 到 -4，反向取值\nprint (cities[-2:-5:-1])  # [\'Tokyo\', \'Cape Town\', \'Prague\']\n\n# 列印整個串列，反轉順序\nprint (cities[::-1])  # [\'Melbourne\', \'Tokyo\', \'Cape Town\', \'Prague\', \'San Diego\'] \n \n 第七題:Senses, planets, and a houseng(感官、行星、房子) \n 說明:Changing, adding, and removing list elements using slicing(透過切片操作來更改、添加和刪除串列中的元素) \n 範例程式: 感 官 \n # 定義一個包含五種感官的清單\nsenses = ["eyes", "nose", "ears", "tongue", "skin"]\nprint(senses)  # 輸出原始的感官清單\n\n# 將清單中索引為1的元素從 "nose" 改為 "smell"\nsenses[1] = "smell"\nprint(senses)  # 輸出更新後的感官清單\n\n# 將索引範圍為3到5的元素（"tongue", "skin"）改為 ["taste", "touch"]\nsenses[3:5] = ["taste", "touch"]\nprint(senses)  # 輸出更新後的感官清單\n\n# 將索引範圍從0到3，步長為2的元素（"eyes", "ears"）改為 ["sight", "hearing"]\nsenses[0:3:2] = ["sight", "hearing"]\nprint(senses)  # 輸出最終更新後的感官清單 \n 範例程式: 行星 \n # 定義一個行星列表\nplanets = ["Mercury", "Mars", "Earth", "Neptune"]\n# 輸出原始行星列表\nprint(planets)\n\n# 將 "Jupiter" 加入列表的末尾\nplanets = planets + ["Jupiter"]\n# 輸出更新後的行星列表\nprint(planets)\n\n# 在索引 2 前插入 "Venus"\n# 先取出索引 0 到 1 的元素，然後加上 "Venus" 和索引 2 到 4 的元素\nplanets = planets[0:2] + ["Venus"] + planets[2:5]\n# 輸出再次更新的行星列表\nprint(planets)\n\n# 在索引 5 位置後插入 "Uranus" 和 "Saturn"\n# 取出索引 0 到 4 的元素，加上新元素，然後加上索引 5 之後的元素\nplanets = planets[:5] + ["Uranus", "Saturn"] + planets[5:]\n# 輸出最終的行星列表\nprint(planets) \n 範例程式: 房子 \n house = ["kitchen", "dining room", "living room", "bedroom", "bathoom", "garden", "balcony", "terrace"]\nprint(house)  # 原始列表\n\n# 刪除 "dining room"\ndel house[1]\nprint(house)  # ["kitchen", "living room", "bedroom", "bathoom", "garden", "balcony", "terrace"]\n\n# 刪除 "garden" 和 "balcony"\ndel house[4:6]\nprint(house)  # ["kitchen", "living room", "bedroom", "bathoom", "terrace"]\n\n# 刪除 "kitchen", "bedroom", 和 "terrace"\ndel house[::2]\nprint(house)  # ["living room", "bathoom"]\n\n# 刪除整個清單\ndel house\ntry:\n    print(house)  # 此處會觸發 NameError\nexcept NameError:\n    print("The variable \'house\' no longer exists.") \n \n 第八題:My friends\' favorite dishes( 我朋友最喜歡的菜 ) \n 說明:for ... in range() (循環控制語句) \n 範例程式: 我朋友最喜歡的菜 \n # 定義朋友的名字列表\nfriends = ["Geetha", "Luca", "Daisy", "Juhan"]  \n\n# 定義喜愛的食物列表\ndishes  = ["sushi", "burgers", "tacos", "pizza"]  \n\n# 打印朋友的名字\nprint("My friends\' names are:")  \nprint(friends)  \n\n# 使用 for 迴圈遍歷朋友列表，打印索引和對應的朋友名字\nfor index in range(0, 4):  \n    print("index:  " + str(index))  # 打印當前索引\n    print("friend: " + friends[index])  # 打印對應的朋友名字\n\n# 打印喜愛的食物\nprint("Their favorite dishes are:")  \nprint(dishes)  \n\n# 使用 for 迴圈遍歷食物列表，打印索引和對應的食物\nfor index in range(0, 4):  \n    print("index:  " + str(index))  # 打印當前索引\n    print("dish: " + dishes[index])  # 打印對應的食物\n\n# 使用 for 迴圈，同時列出朋友和他們喜愛的食物\nfor index in range(0, 4):  \n    print("My friend " + friends[index] + "\'s favorite dish is " + dishes[index])   \n \n 第九題: At the zoo( 在動物園) \n 說明:For loop with if... == ... / else (在 for 迴圈中 逐一遍歷（迭代） 元素，並使用 if...else 條件判斷) \n 範例程式: 動物 \n # 動物清單\nanimals = ["giraffe", "penguin", "dolphin"]\nprint(animals)  # 輸出清單\n\n# 針對清單中的每個位置進行操作\nfor i in range(0, len(animals)):  # 使用 len() 動態取得清單長度\n    print("-- Beginning of loop --")\n    # 輸出每個元素及其位置\n    print("The element in position " + str(i) + " is " + animals[i])\n\n# 想要看到的動物\nwanted_to_see = "penguin"\n\n# 針對清單中的每個位置進行操作\nfor i in range(0, len(animals)):\n    # 如果當前的動物是想看的那個\n    if animals[i] == wanted_to_see:\n        # 輸出特別訊息\n        print("I saw a " + animals[i] + " and I really wanted to see it!")\n    # 如果當前的動物不是特別想看的那個\n    else:\n        # 輸出一般訊息\n        print("I saw a " + animals[i]) \n \n 第十題 :Where are my gloves? ( 我的手套在哪裡？ ) \n 說明:For loop for searching(在 for 迴圈中 逐一遍歷（迭代） 元素，並使用 if...else 條件判斷)) \n 範例程式: 物品位置 \n accessories = ["belt", "hat", "gloves", "sunglasses", "ring"]\nprint(accessories)\n\n# 逐一列出元素及其位置\nfor i in range(len(accessories)):\n    print(f"The element {accessories[i]} is in position {i}")\n\n# 列出長度等於 6 的元素\nfor i in range(len(accessories)):\n    if len(accessories[i]) == 6:\n        print(f"The element {accessories[i]} is in position {i} and it has 6 characters")\n\n# 列出長度小於 6 的元素\nfor i in range(len(accessories)):\n    if len(accessories[i]) < 6:\n        print(f"The element {accessories[i]} is in position {i} and it has less than 6 characters")\n\n# 定義閾值：6，列出長度大於 6 的元素\nn_of_characters = 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) > n_of_characters:\n        print(f"The element {accessories[i]} is in position {i} and it has more than {n_of_characters} characters")\n\n# 定義閾值：6，列出長度不等於 6 的元素\nfor i in range(len(accessories)):\n    if len(accessories[i]) != n_of_characters:\n        print(f"The element {accessories[i]} is in position {i} and it has a number of characters different from {n_of_characters}")\n\n# 定義閾值：2，列出位置小於或等於 2 的元素\nposition = 2\nfor i in range(len(accessories)):\n    if i <= position:\n        print(f"The element {accessories[i]} is in position {i}, which is less than or equal to {position}")\n\n# 定義閾值：2，列出位置大於或等於 2 的元素\nfor i in range(len(accessories)):\n    if i >= position:\n        print(f"The element {accessories[i]} is in position {i}, which is at least {position}")\n \n \n 心得: \n 這些範例涵蓋了 Python 的多個概念，像第三題的if...in.../else...很實用，特別是在設計購物網站或庫存管理系統時。檢查物品是否在列表中，很簡單卻快速的程式，能解決現實生活中需要統計重複且大量的資料。這些技能在各種應用程式開發中都非常實用，從問候、清單管理到搜尋物品，應用範圍廣泛。學習程式設計不僅是寫代碼，還是在訓練邏輯思維。 \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n 繪製交疊框 \n \n 在繪製兩個外切圓 \n \n 中間填入顏色 \n 由AI縮短 \n \n 心得: \n 這次的功課會讓人對運用Brython繪製圖形更有概念，先是了解如何繪製線條且對定位圓的位置有初步的了解，再去學習上色且設定圖形大小，最後才做出老師所出的作業；先是畫出兩個不同色的圓形凸塊，再將方形預設的方形區域切成七塊，將交疊的區域調成不同顏色，最後再將黑色線條的圓和紅色線條的方形畫出來。 \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_hw', 'text': '三個圓 \n 每次都會有不同顏色，且交疊部分顏色也不同，且可隨意改變圓心位置及大小。 \n \n', 'tags': '', 'url': 'w14_hw.html'}, {'title': 'w15', 'text': '從 1 累加到 100 \n # sum 初始值設為 0\nsum = 0\ninit = 1\nupto = 100\n# 利用 for 重複迴圈與變數加法進行累加\nfor i in range(init, upto+1):\n    sum = sum + i\nprint("從" + str(init) + "累加到" + str(upto) + "=" + str(sum)) \n \n \n addto \n # 定義 addto 函式\ndef addto(init, upto):\n    # 初始化 sum 為 0\n    sum = 0\n    # 利用 for 迴圈進行累加\n    for i in range(init, upto + 1):\n        sum = sum + i\n    return sum\n\n# 主程式\ninit = 1\nupto = 100\n# 呼叫 addto 函式\nresult = addto(init, upto)\nprint("從" + str(init) + "累加到" + str(upto) + "=" + str(result))\n \n \n \n add_only_even \n # 定義 addto 函式\ndef addto(init, upto):\n    # 初始化 sum 為 0\n    sum = 0\n    # 利用 for 迴圈進行累加\n    for i in range(init, upto + 1):\n        if i % 2 == 0:  # 判斷 i 是否為偶數\n            sum = sum + i\n    return sum\n\n# 主程式\ninit = 1\nupto = 100\n# 呼叫 addto 函式\nresult = addto(init, upto)\nprint("從" + str(init) + "累加到" + str(upto) + "的偶數和=" + str(result))\n \n \n \n add_avold_8 \n # 定義 addto 函式\ndef addto(init, upto):\n    # 初始化 sum 為 0\n    sum = 0\n    # 利用 for 迴圈進行累加\n    for i in range(init, upto + 1):\n        if i % 10 == 8:  # 檢查數字尾數是否為 8\n            sum = sum + i\n    return sum\n\n# 主程式\ninit = 1\nupto = 100\n# 呼叫 addto 函式\nresult = addto(init, upto)\nprint("從" + str(init) + "累加到" + str(upto) + "，只加尾數為8的數=" + str(result)) \n \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題：Python的數列、判斷式與重複迴圈 (20%) \n Python 課程教材： https://www.learnpythonwithjupyter.com/  - PART 2 與 Part 3 \n 馬尼拉HW 1網頁資料整理與程序練習方法，整理以下（20%）： \n 第 2 部分：列表和 if/else 語句簡介 \n 第 3 部分：for 迴圈簡介 \n 完成上述流程整理後，滿足HW2自評分數輸入cp2024自評表單中。 \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': 'Practice good procedures in groups of six \n 透過 Jupyterlab 良好的網頁，輪流指定各組編寫的 HW 2 相關的程式練習，以及網頁內容（localhost 與 Codespaces 環境）編輯。 \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題：Python 的數字、算法與迴圈 (20%) \n Python 課程教材： https:  //www.learnpythonwithjupyter.com/  - PART 4 與 Part 5 \n 完成上述流程整理後，滿足HW3自評分數輸入cp2024自評表單中。 \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': 'Practice good procedures in groups of six \n 透過 Jupyterlab 良好的網頁，輪流指定各組編寫的 HW 3 相關的程式練習，以及網頁內容（localhost 與 Codespaces 環境）編輯。 \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題：利用Python控制機電模擬系統（20%） \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用 CoppeliaSim 建立機電模擬系統 \n 利用 Python 跨網路控制瀏覽器上的機電類比系統 \n 範例： \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後，滿足HW4自評分數輸入cp2024自評表單中。 \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': 'Practice good procedures in groups of six \n 透過 Jupyterlab 良好的網頁，輪流指定各組編寫的 HW 4 相關的程式練習，以及網頁內容（localhost 與 Codespaces 環境）編輯。 \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口腔與書面專題報告 (20%) \n 期末口腔專題報告影片： \n ..... \n 期末書面專題報告檔案（pdf）： \n ..... \n 電腦輔助設計與實習課程總結心得： \n ..... \n 期末自報告評成績： \n 完成上述流程後，接受最終報告自評分數輸入cp2024自評表單中。 \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};