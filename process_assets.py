import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

os.makedirs('public', exist_ok=True)

# Load the source logo
src = Image.open('logo.png').convert('RGBA')
width, height = src.size
print(f"Loaded logo.png: {width}x{height}")

# Save the original logo directly as dark logo
src.save('public/logo-dark.png', 'PNG')

# 1. Monogram crop
mono_crop_box = (380, 180, 1070, 620)
monogram = src.crop(mono_crop_box)
mono_w, mono_h = monogram.size

max_dim = max(mono_w, mono_h)
square_mono = Image.new('RGBA', (max_dim + 40, max_dim + 40), (5, 7, 13, 255))
offset_x = (square_mono.width - mono_w) // 2
offset_y = (square_mono.height - mono_h) // 2
square_mono.paste(monogram, (offset_x, offset_y), monogram)
square_mono.save('public/logo-monogram.png', 'PNG')

# Favicon sizes
square_mono.resize((16, 16), Image.Resampling.LANCZOS).save('public/favicon-16x16.png', 'PNG')
square_mono.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon-32x32.png', 'PNG')
square_mono.resize((48, 48), Image.Resampling.LANCZOS).save('public/favicon.ico', format='ICO')
square_mono.resize((180, 180), Image.Resampling.LANCZOS).save('public/apple-touch-icon.png', 'PNG')
square_mono.resize((192, 192), Image.Resampling.LANCZOS).save('public/android-chrome-192x192.png', 'PNG')
square_mono.resize((512, 512), Image.Resampling.LANCZOS).save('public/android-chrome-512x512.png', 'PNG')

# 2. Transparent background version of the monogram
trans_mono = square_mono.copy()
data = trans_mono.getdata()
new_data = []
for item in data:
    brightness = max(item[0], item[1], item[2])
    if brightness < 22:
        new_data.append((item[0], item[1], item[2], 0))
    elif brightness < 65:
        alpha = int(((brightness - 22) / 43.0) * 255)
        new_data.append((item[0], item[1], item[2], min(item[3], alpha)))
    else:
        new_data.append(item)
trans_mono.putdata(new_data)
trans_mono.save('public/logo-monogram-trans.png', 'PNG')

# 3. For light background, create a version with a subtle dark backdrop / pill or shadow
# so the metallic chrome VT pops with high definition against white/light surfaces
light_logo = Image.new('RGBA', (700, 160), (255, 255, 255, 0))

# Dark rounded pill behind the monogram for extreme contrast and brand coherence
pill_bg = Image.new('RGBA', (140, 140), (0, 0, 0, 0))
p_draw = ImageDraw.Draw(pill_bg)
p_draw.rounded_rectangle([6, 6, 134, 134], radius=24, fill=(5, 7, 13, 255), outline=(23, 180, 232, 180), width=2)
mono_thumb = trans_mono.resize((110, 110), Image.Resampling.LANCZOS)
pill_bg.paste(mono_thumb, (15, 15), mono_thumb)

light_logo.paste(pill_bg, (10, 10), pill_bg)

draw = ImageDraw.Draw(light_logo)
font_candidates = [
    "C:/Windows/Fonts/segoeuib.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
    "C:/Windows/Fonts/calibrib.ttf",
]
title_font = None
sub_font = None
for f in font_candidates:
    if os.path.exists(f):
        try:
            title_font = ImageFont.truetype(f, 44)
            sub_font = ImageFont.truetype(f, 16)
            break
        except Exception:
            pass

if not title_font:
    title_font = ImageFont.load_default()
    sub_font = ImageFont.load_default()

# Draw VELTRIXA in bold dark navy (#05070D)
draw.text((168, 36), "VELTRIXA", font=title_font, fill=(5, 7, 13, 255))
# Accent the A or subtitle in cyan (#17B4E8)
draw.text((170, 92), "TECHNOLOGY", font=sub_font, fill=(23, 180, 232, 255))

# Also draw subtle divider
draw.line([(168, 84), (320, 84)], fill=(23, 180, 232, 120), width=2)

light_logo.save('public/logo-light.png', 'PNG')
print("Updated light logo and brand assets successfully!")
