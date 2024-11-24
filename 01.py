import math

def print_filled_circle_exact(grid_size, radius):
    """
    在 grid_size x grid_size 的區域內，以 "*" 字符打印出具體圖案的實心圓形。
    :param grid_size: 區域大小（正方形）
    :param radius: 圓的半徑（控制圓形範圍）
    """
    # 計算圓心位置
    center = grid_size // 2

    # 遍歷區域的每個格子
    for y in range(grid_size):
        for x in range(grid_size):
            # 計算當前格子到圓心的距離
            distance = math.sqrt((x - center) ** 2 + (y - center) ** 2)

            # 判斷是否屬於圓形範圍內
            if distance <= radius:
                print("＊", end="")
            else:
                print("　", end="")  # 使用全角空格保持對齊
        print()  # 換行

# 呼叫函數，繪製圓形
print_filled_circle_exact(10, 4.5)
