import { useState } from 'react'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import Stepper from './components/Stepper'
import NavButtons from './components/NavButtons'
import FeatureStrip from './components/FeatureStrip'

import Step1BasicDetails from './steps/Step1BasicDetails'
import Step2Goals from './steps/Step2Goals'
import Step3Lifestyle from './steps/Step3Lifestyle'
import Step4FoodPreferences from './steps/Step4FoodPreferences'
import Step5HealthMedical from './steps/Step5HealthMedical'
import Step6Budget from './steps/Step6Budget'
import Step7Contact from './steps/Step7Contact'

import { Lightbulb, ArrowRight } from 'lucide-react'

const INITIAL = {
  // Step 1
  fullName: '', age: '', gender: '', dob: '',
  heightUnit: 'cm', height: '', weightUnit: 'kg', weight: '',
  bodyType: 'average', otherInfo: '',
  // Step 2
  goals: ['fatLoss'],
  // Step 3
  activity: 'Moderately Active', sleep: '6 – 7 hours', water: '2 – 3 liters',
  workType: 'Desk Job', workoutFreq: '2 – 3 times per week', workoutType: 'Gym / Strength Training',
  steps: '5,000 – 8,000',
  // Step 4
  dietType: 'veg', cuisine: 'North Indian', mealPref: ['home'],
  allergies: 'None', dislikes: '', favourites: '',
  meals: { breakfast: '8:00 AM', midmorning: '11:00 AM', lunch: '1:30 PM', snack: '5:00 PM', dinner: '8:30 PM' },
  // Step 5
  conditions: ['pcos'], onMedication: 'No', medications: '',
  foodAllergies: ['none'], digestion: 'Good', smokeAlcohol: 'Neither', healthNotes: '',
  // Step 6
  budget: '1k-2k', mealPlanPrefs: ['home'], prepTime: 'Less than 30 minutes',
  grocery: 'Online (Instamart, BigBasket, etc.)', cookHelp: 'self', otherPrefs: '',
  // Step 7
  whatsapp: '', email: '', delivery: 'whatsapp', city: '', state: '', notes: '',
}

const TIPS = {
  3: "Tip: Be honest! The more accurate your answers, the better your plan will be.",
  4: "Tip: The more we know about your preferences, the better and tastier your plan will be! 😊",
  6: "Tip: Don't worry, you can always update your preferences later.",
}

export default function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(INITIAL)

  const update = (patch) => setData((d) => ({ ...d, ...patch }))

  const next = () => setStep((s) => Math.min(7, s + 1))
  const back = () => setStep((s) => Math.max(1, s - 1))

  const renderStep = () => {
    switch (step) {
      case 1: return <Step1BasicDetails data={data} update={update} />
      case 2: return <Step2Goals data={data} update={update} />
      case 3: return <Step3Lifestyle data={data} update={update} />
      case 4: return <Step4FoodPreferences data={data} update={update} />
      case 5: return <Step5HealthMedical data={data} update={update} />
      case 6: return <Step6Budget data={data} update={update} />
      case 7: return <Step7Contact data={data} update={update} />
      default: return null
    }
  }

  const isLast = step === 7
  const tip = TIPS[step]

  return (
    <div className="app">
      <TopBar />
      <div className="main">
        <Sidebar currentStep={step} />
        <div>
          <div className="panel">
            <div className="step-heading">Step {step} of 7</div>
            <Stepper current={step} />
            {renderStep()}

            {!isLast && tip && (
              <div className="tip-bar" style={{ marginTop: 16 }}>
                <Lightbulb size={16} className="ico" />
                <div>{tip}</div>
              </div>
            )}

            <NavButtons
              showBack={step > 1}
              onBack={back}
              onNext={isLast ? () => alert('Form submitted! 🎉') : next}
              nextLabel={isLast ? 'Submit & Get My Plan' : 'Next Step'}
              isLast={isLast}
            />
          </div>

          {step === 1 && <FeatureStrip />}
        </div>
      </div>
    </div>
  )
}
