import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
    return <div>
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm leading-relaxed">
                <p>
                    Philip Solarz is an engineer with experience in Linux systems,
                    containerization, Kubernetes, and programming, particularly in Rust and
                    Python. With a Bachelor's degree in Applied Mathematics from Linnaeus
                    University, he combines analytical knowledge with technical expertise to
                    deliver practical solutions in DevOps, Platform Engineering, Software
                    Development, and Data Engineering. Philip has worked in both
                    independent and team settings, with a preference for roles focused on
                    technical problem-solving and infrastructure development.
                </p>

                <div>
                    <h3 className="text-lg font-medium mb-3">Focus Areas and Skills</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">Core Competencies:</span> Linux
                            (RHEL), Kubernetes (setup, management, and development),
                            Containerization (Docker), DevOps, and GitOps methodologies.
                        </li>
                        <li>
                            <span className="font-medium">Programming and Development:</span>{" "}
                            Proficient in Python and Rust, with additional experience in
                            building web applications using Next.js, shadcn, and Tailwind CSS.
                        </li>
                        <li>
                            <span className="font-medium">Database Engineering:</span>{" "}
                            Experience with PostgreSQL, including migration and management
                            within Kubernetes clusters using CloudNativePG.
                        </li>
                        <li>
                            <span className="font-medium">Automation and CI/CD:</span>{" "}
                            Knowledge of tools like Bash, Ansible, Helm, Terraform, GitHub
                            Actions, and ArgoCD for building and managing pipelines.
                        </li>
                        <li>
                            <span className="font-medium">Big Data Technologies:</span>{" "}
                            Familiarity with platforms and tools like Apache Airflow, Spark,
                            Trino, and MinIO.
                        </li>
                        <li>
                            <span className="font-medium">Project Ownership:</span> Experience
                            designing and implementing scalable infrastructure, including a
                            Kubernetes-based PostgreSQL platform with integrated self-service
                            and GitOps functionality.
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Professional Experience</h3>
                    <p>
                        Philip began his career as a Systems Analyst, developing data
                        pipelines and interactive reporting solutions using MySQL, Python,
                        and Dash. In platform engineering roles, he contributed to
                        maintaining and improving complex infrastructures for big data
                        analytics, working with technologies such as Hadoop, Docker, and
                        Kubernetes. At Telia Company, he was involved in migrating a common
                        data lake to an in-house big data platform, working on server
                        management, container orchestration, and CI/CD pipeline development.
                    </p>
                    <p>
                        A notable achievement includes the development of a Kubernetes-based
                        PostgreSQL platform as a solo project. This work involved creating a
                        complete system, from infrastructure to a user-facing self-service
                        portal, demonstrating the ability to manage complex projects
                        effectively.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Learning and Adaptation</h3>
                    <p>
                        Philip uses a structured approach to learning, beginning with
                        foundational exploration through resources such as books, tutorials,
                        and courses. He follows this with hands-on experimentation and
                        project work, which he finds to be the most effective method of
                        learning. Recently, he has incorporated AI tools into his learning
                        process, using them to accelerate problem-solving and skill
                        development.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Soft Skills and Collaboration</h3>
                    <p>
                        Philip is comfortable working independently or in small teams, where
                        he can focus on technical contributions while supporting others as
                        needed. He tends to take a collaborative approach, stepping into
                        leadership roles when appropriate. While technical work is his
                        primary interest, he also recognizes the importance of
                        documentation, planning, and stakeholder communication. He is
                        actively seeking to enhance his collaboration skills and gain
                        experience with larger-scale projects.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-3">
                        Personal Projects and Interests
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">Rustique:</span> A Python library
                            leveraging Rust's performance, providing alternatives to Python
                            built-in types.
                        </li>
                        <li>
                            <span className="font-medium">HomeLab:</span> An
                            Infrastructure-as-Code project for a Kubernetes cluster.
                        </li>
                        <li>
                            <span className="font-medium">Web Development:</span> Development
                            of portfolio websites using modern frameworks like Next.js.
                        </li>
                    </ul>
                    <p className="mt-4">
                        He is motivated by opportunities to learn, solve problems, and
                        contribute to meaningful projects. Philip is open to roles in
                        startups, large enterprises, or open-source initiatives, with a
                        preference for collaborative environments focused on technical
                        challenges and innovation.
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
}