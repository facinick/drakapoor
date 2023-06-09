import { StaticImageData } from 'next/image';
import one from './1.png'
import four from './4.png'
import five from './5.png'
import googleuser from './default.png' 

export type Reviews = {
    id: number;
    rating: number;
    name: string;
    comment: string;
    imageSrc: StaticImageData;
    createdAt: Date;
    url: string;
}[]

export const reviews: Reviews = [
  {
    id: 1,
    rating: 5,
    name: "Tahir Sufi",
    comment: "Dr Anuradha Kapoor is well experienced diabetologist. She believes in a holistic approach for treatment and does not mind going an extra mile for detailed counseling of patients. A highly recommended Doctor.",
    imageSrc: one,
    createdAt: new Date("9 April, 2023"),
    url: "https://goo.gl/maps/NGzxHShyybProsTw6",
  },
    {
    id: 2,
    rating: 5,
    name: "Anand Gautam",
    comment: `She is the best Diabetologist, I have ever consulted. She is very cool and calm properly analyses about patient history & gives her full time and move forward to treat their patients with a very positive approach putting her outstanding talent n experience. She teaches patient basics about diabetes so that it creates an positivity in patient to routinely follow her medications and precautions. Must Consult Dr. Anuradha, Probably 5 stars ⭐️ would be less to rate her talent.`,
    imageSrc: googleuser,
    createdAt: new Date("3 Jan, 2023"),
    url: "https://goo.gl/maps/yyY5EY7QVs1KEtkf8",
  },
    {
    id: 3,
    rating: 5,
    name: "Raksha Prasad",
    comment: `Dr A kapoor has a good approach towards her patient. She has a good hold over her area. My diabetes was beyond the normal range but her medicine helped me to control my diabetes. I am looking forward for her to help me in reversing my diabetes and getting rid of the pills. Thank you for the positivity you gave me. Now I believe in my body and I know I can reverse every negative things that I have in my body!`,
    imageSrc: googleuser,
    createdAt: new Date("7 Nov, 2022"),
    url: "https://goo.gl/maps/F4Be4MmVG8V7ZsCp7",
  },
        {
    id: 4,
    rating: 5,
    name: "Aashish Bohra",
    comment: `Excellent. She is the best Doc in Goregoan. Very kind and helpful regarding your health issue. Gives the best treatment 👍👍👍`,
    imageSrc: four,
    createdAt: new Date("23 April, 2023"),
    url: "https://goo.gl/maps/Qj489yQa9G6zj1Va8",
  },
                {
    id: 5,
    rating: 5,
    name: "Secret Motivator",
    comment: `I have took my parents to Dr Anuradha Kapoor who is the best among the best doctors in her field.
She was very helpful and polite and answered all my queries.
Also she explained the mechanism of how of body parts work and what is the role of diet.

Though I have consulted many doctors before,she is so special to me since she made my mom feel energetic and well again and she is doing great now.

Thank you Dr for your precious service to humankind.

All the very best of luck in future to make many more people smiling by restoring their health back to normal.

Keep smiling always.`,
    imageSrc: five,
    createdAt: new Date("5 April, 2023"),
    url: "https://goo.gl/maps/WinWzxWx9jGtGsJx9",
  }
]