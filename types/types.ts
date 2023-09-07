import { ImageRequireSource, ImageURISource } from "react-native";

export type ImageSourcePropType =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;
export interface JobData {
  employer_company_type: null | string;
  employer_logo: string;
  employer_name: string;
  employer_website: null | string;
  job_apply_is_direct: boolean;
  job_apply_link: string;
  job_apply_quality_score: number;
  job_benefits: string[] | null;
  job_city: string;
  job_country: JobCountry;
  job_description: string;
  job_employment_type: JobEmploymentType;
  job_experience_in_place_of_education: boolean;
  job_google_link: string;
  job_highlights: JobHighlights;
  job_id: string;
  job_is_remote: boolean;
  job_job_title: null | string;
  job_latitude: number;
  job_longitude: number;
  job_max_salary: number | null;
  job_min_salary: number | null;
  job_naics_code?: string;
  job_naics_name?: string;
  job_occupational_categories?: string[];
  job_offer_expiration_datetime_utc: Date;
  job_offer_expiration_timestamp: number;
  job_onet_job_zone: string;
  job_onet_soc: string;
  job_posted_at_datetime_utc: Date;
  job_posted_at_timestamp: number;
  job_posting_language: JobPostingLanguage;
  job_publisher: string;
  job_required_education: JobRequiredEducation;
  job_required_experience: JobRequiredExperience;
  job_required_skills: string[] | null;
  job_salary_currency: null | string;
  job_salary_period: null | string;
  job_state: JobState;
  job_title: string;
}

export enum JobCountry {
  Us = "US",
}

export enum JobEmploymentType {
  Fulltime = "FULLTIME",
  Parttime = "PARTTIME",
}

export interface JobHighlights {
  Benefits?: string[];
  Qualifications: string[];
  Responsibilities?: string[];
}

export enum JobPostingLanguage {
  En = "en",
}

export interface JobRequiredEducation {
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  high_school: boolean;
  postgraduate_degree: boolean;
  professional_certification: boolean;
  professional_certification_mentioned: boolean;
}

export interface JobRequiredExperience {
  experience_mentioned: boolean;
  experience_preferred: boolean;
  no_experience_required: boolean;
  required_experience_in_months: number | null;
}

export enum JobState {
  Tx = "TX",
}

export interface jobDetails {
  apply_options: ApplyOption[];
  employer_company_type: null;
  employer_logo: string;
  employer_name: string;
  employer_reviews: any[];
  employer_website: null;
  estimated_salaries: EstimatedSalary[];
  job_apply_is_direct: boolean;
  job_apply_link: string;
  job_apply_quality_score: number;
  job_benefits: null;
  job_city: string;
  job_country: string;
  job_description: string;
  job_employment_type: string;
  job_experience_in_place_of_education: boolean;
  job_google_link: string;
  job_highlights: JobHighlights;
  job_id: string;
  job_is_remote: boolean;
  job_job_title: null;
  job_latitude: number;
  job_longitude: number;
  job_max_salary: null;
  job_min_salary: null;
  job_offer_expiration_datetime_utc: Date;
  job_offer_expiration_timestamp: number;
  job_onet_job_zone: string;
  job_onet_soc: string;
  job_posted_at_datetime_utc: Date;
  job_posted_at_timestamp: number;
  job_posting_language: string;
  job_publisher: string;
  job_publisher_favicon: string;
  job_publisher_website: string;
  job_required_education: JobRequiredEducation;
  job_required_experience: JobRequiredExperience;
  job_required_skills: null;
  job_salary_currency: null;
  job_salary_period: null;
  job_state: string;
  job_title: string;
}

export interface ApplyOption {
  apply_link: string;
  is_direct: boolean;
  publisher: string;
}

export interface EstimatedSalary {
  job_title: string;
  location: string;
  max_salary: number;
  median_salary: number;
  min_salary: number;
  publisher_link: string;
  publisher_name: string;
  salary_currency: string;
  salary_period: string;
}

export interface JobRequiredEducation {
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  high_school: boolean;
  postgraduate_degree: boolean;
  professional_certification: boolean;
  professional_certification_mentioned: boolean;
}
