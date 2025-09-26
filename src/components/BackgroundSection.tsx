import heroImage from '@/assets/hero-medical.jpg';

const BackgroundSection = () => {
  return (
    <section id="background" className="medical-section">
      <div 
        className="section-background opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="section-overlay bg-gradient-to-r from-background via-background/95 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Background
            </h2>
            
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Almost one million people in the UK live with heart failure, with almost 50% 
                also experiencing kidney (renal) problems. The heart and kidneys are closely 
                interconnected: if the heart suddenly becomes less efficient, renal function 
                can worsen.
              </p>
              
              <p>
                Modern treatments enable people with heart failure to live longer, healthier lives, 
                but their medications must be carefully monitored. Too low a dose of heart medicine 
                can worsen heart failure symptoms, while higher doses may impair renal function.
              </p>
              
              <p className="text-primary font-medium">
                Both situations can increase the risk of hospital admission.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground mb-4">UK residents with heart failure</div>
                  
                  <div className="text-3xl font-bold text-accent mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Also experience kidney problems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;