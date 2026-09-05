# Portfolio landing page — UI/UX direction

## Read on the current experience

The landing page already has a memorable cinematic frame: oversized editorial type, a strong portrait, deep black surfaces and precise technical labels. The problem is identity competition. The serif portrait composition, terminal controls, side chapter rail, robot dog and new cap mascot each ask to be the memorable device. Together they make the work feel less authored than any one of them would alone.

The experience should feel like **an editorial control room for one creative operator**. Keep the dramatic portrait and technical framing. Use AA as a signature/stamp, and reserve the Operator character for meaningful states. Every other decorative system should support that idea.

## Priority changes

### 1. Make the opening immediately legible

- Keep `IAN N. SILVA.` as the dominant object.
- Reduce the intro boot sequence to a single 600–800ms logo/signature reveal on a first visit. Returning visitors should land directly on the hero.
- Replace the long all-caps paragraph with one clear promise and one short evidence line.
- Use one primary CTA: **View selected work**. Make **Start a project** the quieter secondary action.
- Add the AA mark as a small registration stamp near the name. Do not add a second mascot illustration to the hero.

### 2. Reduce the control chrome

- Keep sound and language under one compact utility menu.
- Show four primary destinations: Work, About, Offers, Contact.
- Move Portal to a small utility link; it is useful for existing clients but not part of a new visitor's main decision.
- Replace the full right-side chapter labels with a thin progress rail and the current chapter name. Expand labels only on focus or hover.

### 3. Let the work become visual sooner

- Project cards should show the real project image before expansion. The current text-first accordion asks visitors to commit before giving them visual evidence.
- Use one large featured project followed by a two-column archive.
- Each card needs a tight hierarchy: outcome headline, image, role, three proof points, then the case-study link.
- On hover or keyboard focus, let a cobalt crop-frame trace around the image while it shifts by 1–2%. Avoid card flips and large rotations.

### 4. Give the page one motion idea

Use a **signal line** that begins beside the AA stamp and continues through the page as a chapter/progress device. It can connect the portrait frame, project crops and final contact action. This produces continuity without scroll hijacking.

Recommended motion language:

| Moment | Behaviour | Timing |
| --- | --- | --- |
| First arrival | AA stamp resolves, title rises 10px, portrait mask opens | 600–800ms once |
| Section entry | Rule draws, heading and one supporting element reveal | 350–500ms |
| Project focus | Crop frame traces and image moves 1–2% | 180–260ms |
| Chapter change | Signal line advances and label replaces | 180–240ms |
| Contact arrival | Operator delivers a small frame, then becomes still | 700–900ms once |

All movement must stop for `prefers-reduced-motion` and the saved motion setting. Nothing essential should require hover, pointer movement or animation.

### 5. Reconcile the visual identity

- Portfolio: black, warm paper and restrained cobalt, with olive appearing through AA and selected highlights.
- Studio: paper and olive lead, with ink and cobalt supporting interaction.
- Use one display family per surface. The landing page can keep its high-contrast editorial serif; supporting UI should use Syne/Space Mono sparingly and consistently.
- Remove isolated red accents as the Studio identity becomes the shared system. Cobalt should own interactive focus; olive should own identity.
- Retire the robot dog from persistent navigation. It can live as a project easter egg or archive character, where its playful tone has context.

## Content changes

The current role line spans AI consulting and behavioural economics, while the body adds automations, landing pages and MVPs. Compress this into a specific proposition:

> I design and build AI workflows, digital products and experiments that teams can test with real people.

Follow it with evidence rather than another claim:

> Economics + psychology background. Strategy, interface and implementation by one person.

Rename “Capabilities” to **Ways I can help** or **Selected engagements**. Place real outcomes and product facts ahead of tool lists. Keep the final contact promise: 30 minutes, no pitch, a real conversation.

## Favicon and signature rules

AA is the favicon and small digital signature. The small-size export should use a tight crop, paper ground, hard black silhouette and olive cap. Remove unnecessary empty space and do not introduce the full Operator at favicon size. Validate at 16px, 32px, a pinned tab and both light and dark browser chrome.

## Recommended sequence

1. Simplify navigation and first-visit intro.
2. Rebuild the project archive around visible imagery and proof.
3. Introduce the signal line as the sole page-wide animation.
4. Align red accents to cobalt/olive and place AA as the signature.
5. Add the single contact Operator arrival after the first four improvements are stable.

This order improves comprehension and conversion before adding more spectacle. The immersive quality should come from continuity, timing and composition rather than the number of animated objects.
