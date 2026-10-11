"""Copies AptiQuest launcher icons into a generated Capacitor Android project."""
from pathlib import Path
import shutil

root = Path(__file__).resolve().parent.parent
assets = root / 'android-icons'
res = root / 'android' / 'app' / 'src' / 'main' / 'res'
assert res.exists(), 'Run npx cap add android first.'
for folder in sorted(assets.iterdir()):
    target = res / folder.name
    target.mkdir(parents=True, exist_ok=True)
    for file in folder.glob('*.png'):
        shutil.copy2(file, target / file.name)
print('AptiQuest Android app launcher icons installed.')
