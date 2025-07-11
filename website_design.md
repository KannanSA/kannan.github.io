<high_level_design>
1. **Brand & Art Direction Overview**
   * Dark, sophisticated portfolio design with a flowing blue liquid/silk background texture
   * Modern, clean typography with white text on dark backgrounds
   * Minimalist card-based layout with subtle shadows and rounded corners
   * Professional academic/tech aesthetic with smooth animations and hover effects

2. **Color Palette** (Clone Exactly)
   | Token | HEX / RGB | Usage | Notes |
   |-------|-----------|-------|-------|
   | Primary Dark | #1a1a2e | Main background | Deep navy blue |
   | Secondary Dark | #16213e | Card backgrounds | Slightly lighter navy |
   | Accent Blue | #0f4c75 | Highlights, borders | Medium blue |
   | Text Primary | #ffffff | Main text | Pure white |
   | Text Secondary | #b3b3b3 | Subtext, descriptions | Light gray |
   | Link Blue | #4a90e2 | Links, buttons | Bright blue |
   | Background Flow | Linear gradient with blues | Liquid background effect | Animated flowing texture |

3. **Typography Scale** (Clone Exactly)
   * Primary: System font stack (San Francisco/Segoe UI/Helvetica)
   * Hero Title: 3.5rem, font-weight: 700, letter-spacing: -0.02em
   * Section Headers: 2.5rem, font-weight: 600
   * Card Titles: 1.5rem, font-weight: 600
   * Body Text: 1rem, font-weight: 400, line-height: 1.6
   * Small Text: 0.875rem, font-weight: 400

4. **Spacing & Layout Grid** (Clone Exactly)
   * Container max-width: 1200px
   * Section padding: 80px 0
   * Card padding: 24px
   * Grid gap: 24px
   * Margin between sections: 40px

5. **Visual Effects & Treatments** (Clone Exactly)
   * Flowing liquid background with animated blue gradients
   * Card shadows: 0 8px 32px rgba(0,0,0,0.3)
   * Border radius: 12px for cards
   * Hover effects: subtle scale transform and glow
   * Smooth transitions: 300ms ease-in-out

6. **Component Styles** (Clone Exactly)
   * Navigation: Fixed top nav with blur background
   * Cards: Dark background with white text and institutional logos
   * Buttons: Rounded with blue accent colors
   * Timeline layout for education and experience sections

7. **Site sections** (Clone Exactly)
   * Navigation header with menu items
   * Hero section with name, title, and description
   * Education section with timeline cards
   * Experience section with work history cards
   * Skills section with categorized lists
   * Projects section with project cards
   * Certificates section with certification cards
   * Footer with copyright
</high_level_design>

<sections>
  <clone_section>
    <file_path>src/components/sections/Navigation.tsx</file_path>
    <design_instructions>
      Clone the fixed navigation bar with dark background blur effect, featuring navigation links (About, Education, Experience, Skills, Projects) in white text, positioned at the top of the page with proper spacing and hover effects.
    </design_instructions>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/Hero.tsx</file_path>
    <design_instructions>
      Clone the hero section with flowing blue liquid background, featuring large white title "Kannan Sekar Annu Radha", subtitle "Physics Student at King's College London", descriptive paragraph, and social links (Email, LinkedIn, GitHub) with proper typography and spacing.
    </design_instructions>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/Education.tsx</file_path>
    <design_instructions>
      Clone the education section with "Education" header and three education cards in timeline format, each featuring institutional logos (KCL, UCL, RGS), degree titles, institution names, rankings, dates, and descriptions with proper card styling and spacing.
    </design_instructions>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/Experience.tsx</file_path>
    <design_instructions>
      Clone the experience section with "Experience" header and four experience cards featuring company logos (KCL, Kannan Industrials fish image, NHS, Kennedy Institute), job titles, company names, dates, and bullet-pointed responsibilities with proper card styling.
    </design_instructions>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/Skills.tsx</file_path>
    <design_instructions>
      Clone the skills section with "Skills" header and three categorized skill columns (Languages, Frameworks & ML, Platforms) displayed in a grid layout with proper typography and spacing for each skill category.
    </design_instructions>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/Projects.tsx</file_path>
    <design_instructions>
      Clone the projects section with "Select Projects" header and six project cards arranged in a 2x3 grid, each featuring project names (AR Lens, iCrypto, TetrisAI, iPong, GPComm, YoteCoin) with brief descriptions and proper card styling.
    </design_instructions>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/Certificates.tsx</file_path>
    <design_instructions>
      Clone the certificates section with "Certificates" header and three certificate cards (Machine Learning, Deep Learning, CS50x) featuring certificate titles, issuing organizations, and certificate IDs with proper card styling and layout.
    </design_instructions>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/Footer.tsx</file_path>
    <design_instructions>
      Clone the footer section with copyright text "© 2024 Kannan Sekar Annu Radha. All rights reserved." centered at the bottom of the page with proper typography and spacing.
    </design_instructions>
  </clone_section>
</sections>