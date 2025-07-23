import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import emailjs from "emailjs-com";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez saisir une adresse email valide.",
  }),
  phone: z.string().min(10, {
    message: "Veuillez saisir un numéro de téléphone valide.",
  }),
  company: z.string().optional(),
  service: z.string({
    required_error: "Veuillez sélectionner un service.",
  }),
  frequency: z.string({
    required_error: "Veuillez sélectionner une fréquence.",
  }),
  surface: z.string({
    required_error: "Veuillez indiquer la surface approximative.",
  }),
  address: z.string().min(5, {
    message: "Veuillez saisir une adresse valide.",
  }),
  postalCode: z.string().min(5, {
    message: "Veuillez saisir un code postal valide.",
  }),
  city: z.string().min(2, {
    message: "Veuillez saisir une ville valide.",
  }),
  details: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité.",
  }),
});

const DevisForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      frequency: "",
      surface: "",
      address: "",
      postalCode: "",
      city: "",
      details: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Remplace par tes propres IDs EmailJS
    const serviceID = "service_n7b5qt5";
    const templateID = "template_oqts388";
    const userID = "DS7JhpmKaH0gh-gtX";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          ...values,
          to_email: "contact@optimo-proprete.fr", // Assure-toi que ce champ existe dans ton template EmailJS
        },
        userID
      )
      .then(() => {
        toast({
          title: "Demande envoyée !",
          description:
            "Votre demande de devis a bien été reçue. Nous vous contacterons dans les plus brefs délais.",
        });
        form.reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du devis.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Vos coordonnées
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Jean" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Dupont" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jean.dupont@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="01 23 45 67 89" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Entreprise (optionnel)</FormLabel>
                <FormControl>
                  <Input placeholder="Nom de votre entreprise" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Détails de votre demande
          </h3>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service souhaité</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="immeubles">
                      Entretien d'immeubles
                    </SelectItem>
                    <SelectItem value="bureaux">Ménage de bureaux</SelectItem>
                    <SelectItem value="chantier">
                      Remise en état après chantier
                    </SelectItem>
                    <SelectItem value="autre">
                      Autre (précisez dans les détails)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="frequency"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Fréquence souhaitée</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ponctuel" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Intervention ponctuelle
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="hebdomadaire" />
                      </FormControl>
                      <FormLabel className="font-normal">Hebdomadaire</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="mensuel" />
                      </FormControl>
                      <FormLabel className="font-normal">Mensuel</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="autre" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Autre (précisez dans les détails)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="surface"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Surface approximative (m²)</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez la surface" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="moins50">Moins de 50 m²</SelectItem>
                    <SelectItem value="50-100">50 - 100 m²</SelectItem>
                    <SelectItem value="100-200">100 - 200 m²</SelectItem>
                    <SelectItem value="200-500">200 - 500 m²</SelectItem>
                    <SelectItem value="500-1000">500 - 1000 m²</SelectItem>
                    <SelectItem value="plus1000">Plus de 1000 m²</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Adresse du lieu à nettoyer
          </h3>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse</FormLabel>
                <FormControl>
                  <Input placeholder="123 rue de la Propreté" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code postal</FormLabel>
                  <FormControl>
                    <Input placeholder="75000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ville</FormLabel>
                  <FormControl>
                    <Input placeholder="Paris" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Informations complémentaires (optionnel)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Précisions sur vos besoins, accès, contraintes particulières..."
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  J'accepte la politique de confidentialité et le traitement de mes
                  données personnelles.
                </FormLabel>
                <FormDescription>
                  Vos données personnelles seront utilisées uniquement pour traiter
                  votre demande de devis.
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-optimo-blue-light"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Demander un devis gratuit"}
        </Button>
      </form>
    </Form>
  );
};

export default DevisForm;
