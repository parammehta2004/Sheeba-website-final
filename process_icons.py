from rembg import remove
from PIL import Image, ImageEnhance
import os

assets_dir = r"c:\Users\Admin\Desktop\JARVIS\Work\Sheeba The nutritionist.com\public\assets"
files = ["pill.png", "hex.png", "hair.png", "head.png"]

for f in files:
    input_path = os.path.join(assets_dir, f)
    output_path = os.path.join(assets_dir, f"hd_{f}")
    
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        continue
        
    print(f"Processing {f}...")
    try:
        # Open image
        with open(input_path, 'rb') as i:
            input_data = i.read()
            
        # Remove background
        output_data = remove(input_data)
        
        # Save temporary image
        temp_path = os.path.join(assets_dir, f"temp_{f}")
        with open(temp_path, 'wb') as o:
            o.write(output_data)
            
        # Adjust color
        img = Image.open(temp_path).convert("RGBA")
        
        # Make the green "more foresty" and liven it up
        # Increase saturation
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.4)
        
        # Increase contrast
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.15)
        
        # Save HD image
        img.save(output_path)
        
        # Cleanup
        os.remove(temp_path)
        print(f"Successfully created {output_path}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
