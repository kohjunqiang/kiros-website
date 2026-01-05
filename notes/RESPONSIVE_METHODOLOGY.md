# Responsive Design Methodology

## Design System Analysis (from Figma)
- **Base Design Width**: 1440px
- **Container Max Width**: 1320px (with 60px padding on each side)
- **Mobile First**: Start from smallest screen, scale up

## Breakpoints (Tailwind Default)
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Typography Scale

### Headings
- **Hero Title (H1)**: 
  - Mobile: `text-4xl` (36px) → `md:text-5xl` (48px) → `lg:text-6xl` (60px) → `xl:text-7xl` (72px)
  - Figma: 70px (use `text-[clamp(2.25rem,5vw,4.375rem)]` for fluid)
  
- **Section Title (H2)**:
  - Mobile: `text-3xl` (30px) → `md:text-4xl` (36px) → `lg:text-5xl` (48px) → `xl:text-[52px]`
  - Figma: 52px
  
- **Subsection Title (H3)**:
  - Mobile: `text-xl` (20px) → `md:text-2xl` (24px)
  - Figma: 24px

### Body Text
- **Large Body**: 
  - Mobile: `text-base` (16px) → `md:text-lg` (18px)
  - Figma: 18px
  
- **Regular Body**:
  - Mobile: `text-sm` (14px) → `md:text-base` (16px)
  - Figma: 16px
  
- **Small Text**:
  - Mobile: `text-xs` (12px) → `md:text-sm` (14px)
  - Figma: 14px

## Spacing Scale

### Container Padding
- Mobile: `px-4` (16px)
- Tablet: `md:px-8` (32px)
- Desktop: `md:px-[60px]` (60px - matches Figma)

### Section Padding (Vertical)
- Mobile: `py-12` (48px) → `md:py-16` (64px) → `lg:py-20` (80px) → `xl:py-[120px]`
- Figma: 120px top/bottom for major sections

### Content Padding
- Small: `p-6` (24px) → `md:p-8` (32px) → `lg:p-10` (40px)
- Figma: 40px for cards/boxes

### Gaps
- Small: `gap-3` (12px) → `md:gap-4` (16px)
- Medium: `gap-4` (16px) → `md:gap-6` (24px)
- Large: `gap-6` (24px) → `md:gap-8` (32px)

## Image/Icon Sizes

### Icons
- Small: `w-4 h-4` (16px) → `md:w-5 md:h-5` (20px)
- Medium: `w-5 h-5` (20px) → `md:w-6 md:h-6` (24px)
- Large: `w-6 h-6` (24px) → `md:w-7 md:h-7` (28px)
- Figma: 20px for most icons

### Badges/Eyebrows
- Height: `h-6` (24px) → `md:h-7` (28px)
- Figma: 28px height

### Feature Images
- Use `w-full` with `max-w-[...]` constraints
- Maintain aspect ratios with `aspect-[...]`
- Figma illustrations: typically 440px height

## Responsive Strategy

### 1. Fluid Typography
Use `clamp()` for smooth scaling:
```css
font-size: clamp(min, preferred, max)
```

### 2. Flexible Containers
- Use `max-w-7xl` (1280px) or custom `max-w-[1320px]` for main container
- Center with `mx-auto`
- Responsive padding: `px-4 md:px-8 lg:px-[60px]`

### 3. Grid/Flex Layouts
- Mobile: Stack vertically (`flex-col`)
- Tablet+: Horizontal (`md:flex-row`)
- Use `flex-1` for equal distribution
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### 4. Image Handling
- Container: `relative w-full`
- Image: `absolute inset-0 w-full h-full object-cover` OR
- Responsive: `w-full h-auto`

### 5. Aspect Ratios
- Hero: `aspect-[16/9]` or `aspect-[21/9]`
- Cards: `aspect-square` or `aspect-[4/3]`
- Illustrations: Fixed height with `w-full`

## Implementation Checklist

For each component:
- [ ] Container has responsive padding (`px-4 md:px-[60px]`)
- [ ] Typography scales with breakpoints
- [ ] Spacing (gaps, padding) scales appropriately
- [ ] Icons have consistent sizing
- [ ] Images are responsive with proper aspect ratios
- [ ] Layout switches from vertical (mobile) to horizontal (desktop)
- [ ] Max-width constraints prevent over-stretching
- [ ] Touch targets are minimum 44px on mobile
