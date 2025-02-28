
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, FileImage, Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FadeContent from "@/components/FadeContent";

const TipSubmission = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    contactInfo: "",
    hasImage: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageToggle = () => {
    setFormData(prev => ({
      ...prev,
      hasImage: !prev.hasImage
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Tip Submitted",
        description: "Thank you for your information. Authorities have been notified.",
        variant: "success"
      });
    }, 1500);
  };

  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl">
        <FadeContent duration={800}>
          <Card className="p-6 md:p-8 border-t-4 border-primary shadow-lg">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-amber-500" />
                  Submit a Tip
                </h2>
                <p className="text-muted-foreground">
                  If you have information about a missing child, please share it with us. All tips are kept confidential.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 p-6 rounded-lg text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium">Tip Submitted Successfully</h3>
                  <p className="text-muted-foreground">
                    Thank you for your information. Your tip has been forwarded to the appropriate authorities.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        location: "",
                        description: "",
                        contactInfo: "",
                        hasImage: false
                      });
                    }}
                  >
                    Submit Another Tip
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium">
                      Location of Sighting
                    </label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. Westlands area, Nairobi"
                      required
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium">
                      Description of What You Saw
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Please provide as much detail as possible"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="contactInfo" className="block text-sm font-medium">
                      Your Contact Information (Optional)
                    </label>
                    <Input
                      id="contactInfo"
                      name="contactInfo"
                      placeholder="Phone number or email"
                      value={formData.contactInfo}
                      onChange={handleChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. This information will only be used if authorities need additional details.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={handleImageToggle}
                    >
                      <FileImage className="h-4 w-4" />
                      {formData.hasImage ? "Remove Image" : "Add Image"}
                    </Button>
                  </div>
                  
                  {formData.hasImage && (
                    <div className="bg-muted/30 border border-dashed border-muted p-8 rounded-lg text-center">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <FileImage className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Drag and drop an image, or click to select
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Supports JPG, PNG up to 5MB
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Submit Tip
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Card>
        </FadeContent>
      </div>
    </section>
  );
};

export default TipSubmission;
